# BeatHerb
### SSAFY 10기 공통 프로젝트 서울 5반 :musical_score: 'Bit는 알아도 Beat는 모른다' :musical_score: <br /> (2024.01.08 ~ 2024.02.16)

![beatherb](https://github.com/Woonggss/beatherb/assets/88834958/1e5a785a-e630-4608-93f2-49a6e921d874)

## :green_book: 목차 :green_book:
:one: [프로젝트 소개](#1-프로젝트-소개) <br/>
:two: [개발 환경](#2-개발-환경)<br/>
:three: [서비스 화면](#3-서비스-화면) <br/>
:four: [주요 기능](#4-주요-기능) <br/>
:five: [프로젝트 특징 기술 소개](#5-프로젝트-특징-기술-소개) <br/>
:six: [설계 문서](#6-설계-문서) <br/>
:seven: [팀원 소개](#7-팀원-소개) <br/>

## 1. 프로젝트 소개
### :scroll: Overview :scroll:
#### "음악 제작? 어렵게 생각하지 마세요! BeatHerb가 도와드립니다."
##### 피아노 반주에 키보드 소리를 입혀보거나 잔잔한 멜로디에 고양이 울음 소리를 입혀보거나 마음껏 소리를 만들어보세요. <br /> 내가 만든 소리는 업로드와 라이브를 통해 BeatHerb 사용자들과 공유할 수 있습니다.

## 2. 개발 환경
### :books: Tech Stack :books:
#### Backend Framework
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![SpringBoot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white)
![OpenVidu](https://img.shields.io/badge/OpenVidu-yellow?style=for-the-badge&logo=LiveChat&logoColor=white)
![Socket.io](https://img.shields.io/badge/WebSocket-blue?style=for-the-badge&logo=Socket.io)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![SpringDataJpa](https://img.shields.io/badge/Spring_Data_Jpa-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
#### Frontend Framework
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ffmpeg](https://img.shields.io/badge/ffmpeg-007808?style=for-the-badge&logo=ffmpeg)
![Tone.js](https://img.shields.io/badge/Tone.js-red?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEX6Jdn9INn/FNrFW9P2KNn7I9nhPdZwocoA2MHzJdn/HNqagM4hzcMA4b8A28DBXtNBv8UA3cBupMkA3MAA37+YhM4S0sLlONd4ncqlec/LVNRJucZ8msscz8JFvMWffc8w6ozjAAAAm0lEQVR4AdXOxxEDMQxDUYWNyjTknPrv0mIBGF9tXvnmD8w/nv3ydn4y/Ga3rNs+03fYY8qFAmtryyIEaP2ADhAw6sdTFjBgQ21dAAK0XjrAwNiudQ50O8CADUY6wMDszhcDUBDMNWUOrLvdu4CBOZwfJQMMhP36zAIGrPMvfRMwtq+lAwyE/a11Dm5aBwMoq2idA3QBAeR+AXwA1o8n4DQ388IAAAAASUVORK5CYII=)
![Wavesurfer.js](https://img.shields.io/badge/Wavesurfer.js-orange?style=for-the-badge&logo=data:image/png;base64,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)
![ffmpeg.wasm](https://img.shields.io/badge/ffmpeg.wasm-007808?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAABVVf9gQP9gQN8AAP9VVf9lTfBlTvBlTu9lTvBlTfBdRuhjTu9lTvBVKtRkTvBlTvBjTu5jTvNlTe9lTvFgSO9lTe5jS/NkTfBlTfBlTvBkTfFkTPBkTfBlTvBlTvBjR/FkTe5kTfBlTe9mTe5kTe9jTOxkTe9kTfFlTfFkTe9kTe9mS/NjS+4OknaJAAAALnRSTlMABggIAQN38Pb1uQs+3wbv/0s+8bggTFXJ8f6RVGbxyBKFhX5noDaSkjWRylVLpIxVKAAAAOBJREFUeAG900UWgwAMRdHgDr/u7rb/7bXBT6jbm97ggf6VonKaTpyhJimFm5bNOa5HRH5gJ1lm5mGEtBpRvYGsKKQkvYkkq1V2uDqlee1OF0Cvzo7+YDgaA5hMKU+f9Quf69PJi06LB65YV1xfrtbZgGoDI+nzPgKjNDAUzndlq6WBTcXFAKouB6TLAeG9rRiQXh+WBoxAPN/FaVQaoN1qKZ2f2lKo6Ir3F1UXX+1FH4+G+4s3Esfh2PYy111k8fEtS65cGJWdTmJps7XnAp83tOmItU9+HM4gTtfkj/PbzofFKTJo5uJ5AAAAAElFTkSuQmCC)
![waveform_playlist](https://img.shields.io/badge/waveform_playlist-green?style=for-the-badge&logo=waveform_playlist)
#### DB
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
#### Management Tool
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![GitLab](https://img.shields.io/badge/gitlab-orange.svg?style=for-the-badge&logo=gitlab&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Mattermost](https://img.shields.io/badge/Mattermost-blue?style=for-the-badge&logo=Mattermost)

## 3. 서비스 화면
#### 홈 화면 & 로그인 화면
| <img src="https://github.com/Woonggss/beatherb/assets/88834958/f4945f8e-b010-418f-8ca2-41c3d3462cbf" width="500" height="250"/> | <img src="https://github.com/Woonggss/beatherb/assets/88834958/db4d6a8a-7c39-49ad-85b4-97dcf8497468" width="500" height="250"/> |
|:--------------------------------------------------------------------------:|:------------------------------------------------:|
|                                  **홈 화면**                                  |                    **로그인 화면**                    |

#### 작업실 화면 (소리 쌓기 화면)
|<img src="https://github.com/Woonggss/beatherb/assets/88834958/2baeb1f4-7ec1-4934-b0bf-1fe619eca295" width="500" height="250"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/05f23852-6114-4cb9-adb6-798283949e1b" width="500" height="250"/>|
|:---:|:---:|
|**내 컴퓨터에서 음원 파일 가져오고 BeatHerb에서 <br />마음에 드는 소리를 쌓은 후 업로드하는 화면**|**BeatHerb에서 마음에 드는 소리를 가져오고 <br />가상 악기로 만든 소리를 쌓은 후 업로드하는 화면**|
#### 컨텐트 상세 검색 화면
|<img src="https://github.com/Woonggss/beatherb/assets/88834958/20890c6a-adb6-4121-b153-26ee63f7770d" width="500" height="250"/>|
|:---:|
|**컨텐트 상세 검색 화면**|

#### 게시판 화면
|<img src="https://github.com/Woonggss/beatherb/assets/88834958/aa9f81b5-e3a8-4dbe-9c8c-eff6ba258862" width="500" height="250"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/0007f658-4781-43c5-ba5c-512b2cb98410" width="500" height="250"/>|
|:---:|:---:|
|**전체 컨텐트 게시판 화면**|**라이브 게시판 화면**|

#### 라이브 화면
|<img src="https://github.com/Woonggss/beatherb/assets/88834958/97cd5245-58f7-4192-9237-f77aa41b8337" width="500" height="250"/>|
|:---:|
|**라이브 화면**|

## 4. 주요 기능
#### 1. 소리 쌓기 서비스 :sound:
##### 기존에 등록되어 있는 음반 정보를 가져와서 그 음반 위에 소리를 쌓을 수 있습니다.<br/><br/> ex)<br/>1-1). 피아노 연주가 나오는 멜로디 정보를 가져와서 보컬 소리를 쌓을 수 있음.<br/>1-2). 원하는 보컬 정보를 가져온 후 piano, synth, drum과 같은 가상악기를 통해 소리를 녹음하여 쌓을 수 있음.
![drum.mp4](..%2Fbeatherb_imgFiles%2Fdrum.mp4)

#### 2. 라이브를 활용해 커뮤니티로 확장 :tv:
##### 라이브에서 공유하는 컨텐츠에 관심 있는 사람은 누구나 들어와서 라이브 방송에 참여 할 수 있습니다.
![live.mp4](..%2Fbeatherb_imgFiles%2Flive.mp4)

#### 3. 해시태그를 이용한 상세 검색 :computer:
##### 피아노, 드럼, MR 등과 같은 해시태그를 기반으로 정확한 검색 결과를 얻을 수 있습니다.
![해시태그를 이용한 상세검색](/uploads/d1ae2b01a1cba5cbbf194550fae7d88c/detail_search.mp4)

## 5. 프로젝트 특징 기술 소개
#### 1. kafka 도입을 활용한 멀티 프로세싱 음악 처리 후 사용자는 업로드가 되었다는 신호를 보다 빠르게 제공 받을 수 있습니다.<br/> :arrow_forward: (약 10초 이상 -> 약 3초)
#### 2. hls 기술을 이용한 실시간 음악 스트리밍
#### 3. Openvidu 를 활용한 라이브
#### 4. 가상 악기를 이용하여 음악 생성 후 업로드 가능

## 6. 설계 문서
#### API
<details>
<summary>Member</summary>
![member-controller](/uploads/86e6f8888f3eac80ad12acf659a6f1da/member-controller.PNG)
![member-info-controller](/uploads/026d9e72b03460ba22c0b2fc06469c69/member-info-controller.PNG)
</details>

<details>
<summary>Auth</summary>
![auth-controller](/uploads/42268e797cbc6c283b823d3d603cbae0/auth-controller.PNG)
</details>

<details>
<summary>HashTag</summary>
![hash-tag-controller](/uploads/e0240fb282ab5d936eff92c94743766f/hash-tag-controller.PNG)
</details>

<details>
<summary>Live</summary>
![live-controller](/uploads/ff3abc8893837f545349fa3cfdb2bc8b/live-controller.PNG)
</details>

<details>
<summary>Content</summary>
![content-controller](/uploads/6d540e30751dde097ae2cc04b85d994a/content-controller.PNG)
![content-load-controller](/uploads/8c5c7836b0c711ece760ab49374d3555/content-load-controller.PNG)
![content-detail-controller](/uploads/f468c84a4fb8da9c07cb2f666066113f/content-detail-controller.PNG)
![content-search-controller](/uploads/808b950a4edca9ea9f56f31d164d669d/content-search-controller.PNG)
</details>

<details>
<summary>Follow</summary>
![follwer-controller](/uploads/5ce9a9ec610a347d1176252644928545/follwer-controller.PNG)
![following-controller](/uploads/7fb20754acfb80ac812a9f9bf6368502/following-controller.PNG)
</details>

<details>
<summary>DirectMessage</summary>
![direct-message-controller](/uploads/2730867f590f29ceb3f3c7ddbbab970e/direct-message-controller.PNG)
</details>

<details>
<summary>Interest</summary>
![interest-controller](/uploads/a84fb3ecd8aae38831f0b7df35792f41/interest-controller.PNG)
</details>

<details>
<summary>Star</summary>
![star-controller](/uploads/1adc9a1ec22d8c2692cabedbd4d110a1/star-controller.PNG)
</details>

<details>
<summary>Comment</summary>
![comment-controller](/uploads/302ac002cb85debddd38b7072f5221f5/comment-controller.PNG)
</details>

#### ERD
![BeatHerb_erd](https://github.com/Woonggss/beatherb/assets/88834958/f80710a9-52dd-4c75-b256-bbd68d8860ed)

#### Architecture Structure
![image](https://github.com/Woonggss/beatherb/assets/88834958/85ca1357-a8ba-4182-afd9-d47f613dc5cd)

## 7. 팀원 소개
|팀장(김도현)|팀원(김범수)|팀원(최지희)|팀원(박도연)|팀원(박세웅)|팀원(유시연)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|<img src="https://github.com/Woonggss/beatherb/assets/88834958/1132df50-5013-44f9-b7c6-2ee0bc6572e2" width="500" height="200"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/bf1da342-9fe3-478e-bff9-45df36a42e0f" width="500" height="200"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/caf42abf-f389-43f8-8b9a-ed7c515a3e8e" width="500" height="200"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/37e7c40a-f12a-4c3a-8ed6-9114a651f780" width="500" height="200"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/496302c4-c3a5-4ff7-a9c0-1c8447fa215e" width="500" height="200"/>|<img src="https://github.com/Woonggss/beatherb/assets/88834958/d6dc907e-08e5-4205-8d86-9729847be890" width="500" height="200"/>|
|**Backend Lead/Infra**|**Frontend Lead**|**Full Stack**|**Full Stack**|**Full Stack**|**Full Stack**|
