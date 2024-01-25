package store.beatherb.restapi.member.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import store.beatherb.restapi.member.dto.KakaoUserAuthDto;
import store.beatherb.restapi.member.dto.OIDCDto;
import store.beatherb.restapi.member.dto.Provider;
import store.beatherb.restapi.member.dto.request.KakaoAuthRequest;
import store.beatherb.restapi.member.dto.request.MemberJoinRequest;
import store.beatherb.restapi.member.dto.response.TokenResponse;

import java.util.Base64;
import static store.beatherb.restapi.member.Util.AuthUtil.payloadDecoder;

@Service
@Slf4j
@RequiredArgsConstructor
public class KakaoAuthService {
    @Value("${kakao.client_id}")
    private String clientId;
    @Value("${kakao.redirect_uri}")
    private String redirectUri;
    @Value("${kakao.auth_base_url}")
    private String authBaseUrl;

    private final MemberService memberService;
    public TokenResponse auth(KakaoAuthRequest kakaoAuthRequest){
        //1. access token refresh token id token 받아옴
        KakaoUserAuthDto kakaoUserAuthDto=userAuth(kakaoAuthRequest);
        log.info(kakaoUserAuthDto.toString());
        //2. id 토큰 이용해서 이메일/식별자 받아옴
        MemberJoinRequest memberJoinRequest=userInfo(kakaoUserAuthDto);
        //회원가입, 로그인 로직으로 보내기
        if(memberService.findMember(memberJoinRequest)){
            memberService.socialLogin(memberJoinRequest);
        }else{
            memberService.socialJoin(memberJoinRequest);
        }
        //처리결과 보내기 (회원가입/로그인완료/에러)
        return null;
    }

    private MemberJoinRequest userInfo(KakaoUserAuthDto kakaoUserAuthDto){
        // JWT 토큰을 디코딩해서 ID, SUB값 가져오기
        String jwtPayload= new String(Base64.getUrlDecoder().decode(kakaoUserAuthDto.getIdToken().split("\\.")[1]));
        OIDCDto oidcDto= payloadDecoder(jwtPayload);
        return MemberJoinRequest
                .builder()
                .provider(Provider.KAKAO)
                .email(oidcDto.getEmail())
                .identifier("kakao "+oidcDto.getSub())
                .build();
    }

    private KakaoUserAuthDto userAuth(KakaoAuthRequest kakaoAuthRequest) {
        // webclient로 통신해서 access token, refresh token받아오기
        WebClient webClient=WebClient.builder()
                                    .baseUrl(authBaseUrl)
                                    .defaultHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
                                    .build();

        MultiValueMap<String, String> formData=new LinkedMultiValueMap<>();
        formData.add("grant_type","authorization_code");
        formData.add("client_id",clientId);
        formData.add("redirect_uri",redirectUri);
        formData.add("code",kakaoAuthRequest.getCode());

        return webClient
                .post()
                .bodyValue(formData)
                .retrieve()
                .bodyToMono(KakaoUserAuthDto.class)
                .block();
    }
}
