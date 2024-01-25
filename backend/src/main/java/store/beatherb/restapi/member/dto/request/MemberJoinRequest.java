package store.beatherb.restapi.member.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import store.beatherb.restapi.member.dto.Provider;

@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MemberJoinRequest {
    //제공자, 이메일, 식별자
    @NotNull(message="provider는 반드시 포함")
    Provider provider;
    @NotNull(message="email은 반드시 포함")
    String email;
    String identifier;
}
