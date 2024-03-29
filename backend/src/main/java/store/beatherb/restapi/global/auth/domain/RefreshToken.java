package store.beatherb.restapi.global.auth.domain;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value="refreshToken", timeToLive = 60 * 60 * 24 * 30)
public class RefreshToken {
    @Id
    private Long id;
    private String value;

    @Builder
    public RefreshToken(Long id, String value){
        this.id = id;
        this.value = value;
    }
}
