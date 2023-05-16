# 🏢 LUPIN 일정관리 프로그램 (FE)

![title](https://lupintech.netlify.app/assets/logo-blue.png)  
<br />
![2023-05-16-15-14-03](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/9a82a0ca-9c50-4320-a65a-d5779d23e308)

## 💁🏻 프로젝트 소개

> LUPIN 일정관리 프로그램으로 LUPINTECH 회사 사원들의 연차 / 당직을 손쉽게 관리해보세요! <br />

#### ⏰ 개발 기간

- 2023.04.27 ~ 2023. 05. 16

#### 🔗 배포 사이트

- [💻 LUPIN 일정관리 프로그램 💻](https://lupintech.netlify.app/)

<br />

## 👥 팀원 소개

| 유선주(팀장)                                                                                        | 박현준(팀원)                                                                                 | 송지윤(팀원)                                                                                | 이승용(팀원)                                                                                | 표승연(팀원)                                                                             |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ![title](https://avatars.githubusercontent.com/u/102499959?v=4)                                     | ![title](https://avatars.githubusercontent.com/u/69203535?v=4)                               | ![title](https://avatars.githubusercontent.com/u/71622691?v=4)                              | ![title](https://avatars.githubusercontent.com/u/61074759?v=4)                              | ![title](https://avatars.githubusercontent.com/u/92071025?v=4)                           |
| [@yousunzoo](https://github.com/yousunzoo)                                                          | [@johnphjkr](https://github.com/johnphjkr)                                                   | [@jiyoon29](https://github.com/jiyoon29)                                                    | [@yong8048](https://github.com/yong8048)                                                    | [@pyozz](https://github.com/pyozz)                                                       |
| 📍사이트 디자인<br />📍프로젝트 세팅 및 배포<br />📍연차/당직 신청 페이지<br />📍실시간 알람 기능   | 📍프로필 수정 페이지<br />📍사원 및 사원 연차 관리 페이지                                    | 📍기본 레이아웃 설정<br />📍네비게이션 바<br />📍관리자 메인 페이지<br />                   | 📍로그인 페이지<br />📍회원가입 페이지<br />📍404 페이지                                    | 📍유저 메인 페이지<br />📍내 일정 보기 페이지<br />📍캘린더 컴포넌트 세팅                |
| [유선주 작업 내역](https://github.com/MiniTeam-5/MiniProject-FE/issues?page=2&q=author%3Ayousunzoo) | [박현준 작업 내역](https://github.com/MiniTeam-5/MiniProject-FE/issues?q=author%3Ajohnphjkr) | [송지윤 작업 내역](https://github.com/MiniTeam-5/MiniProject-FE/issues?q=author%3Ajiyoon29) | [이승용 작업 내역](https://github.com/MiniTeam-5/MiniProject-FE/issues?q=author%3Ayong8048) | [표승연 작업 내역](https://github.com/MiniTeam-5/MiniProject-FE/issues?q=author%3Apyozz) |

<br />

## 🔧 개발 환경

![skillsets](https://github.com/MiniTeam-5/MiniProject-FE/assets/102499959/a0ea78ea-ad77-4ad6-a987-25945447b64a)

- 기타 라이브러리 : `FullCalendar`, `SweetAlert2`, `event-source-polyfill`, `lodash`, `moment`, `react-icons`

<br />

## 🖥️ 주요 기능

### 회원가입 및 로그인

<img src="https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/43a6127c-3e18-47ce-971b-db92b6d785a8" width="49%" height="49%" />
<img src="https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/d05f8700-4698-49f3-bab8-943003d15ad8" width="49%" height="49%" />

### 개인정보 수정

![개인정보 수정](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/3ec34abd-cf02-4687-afbe-de96384a4f79")

- 유저는 자신의 프로필 사진과 비밀번호를 변경할 수 있습니다.

### 개인 연차/당직 신청 및 취소

#### 연차/당직 신청

![연차/당직 신청](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/7c08b94c-99b4-4582-8fa8-73b4dcd34c73")

- 연차 신청에서는 모든 사원의 연차 신청 정보 + 나의 당직 신청 정보를 보여주고, 당직 신청에서는 나의 연차 및 당직 신청 정보를 보여줌으로써 유저가 일정에 맞춰서 연차 / 당직 신청을 할 수 있습니다.

#### 연차/당직 취소

![연차/당직 취소](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/7e9a7ca5-9d72-4d3d-80fa-e449fd1528fe)

### 실시간 알람 (SSE)

![실시간 알람](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/9aead0e7-b002-4dab-bc6e-54080fe09355)

### 관리자 + 마스터

![관리자 + 마스터](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/47da1541-b49b-4fd6-8e4f-e0a920a7a5d9)

- 승인 대기 중인 현황을 살펴볼 수 있습니다.
- 모든 일정을 달력에서 확인할 수 있습니다.
  ![연차/당직현황](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/a035c112-3d91-4c48-9a05-37116037553f)
- 관리자 홈에서 승인대기 중인 연차 / 당직 현황의 정보를 가져올 수 있습니다.
- 관리자가 승인 / 거부 처리 시 확인 절차를 거친 후에 해당 요청을 완료합니다.

### 사원 및 사원 연차 관리

![사원 및 사원 연차 관리](https://github.com/MiniTeam-5/MiniProject-FE/assets/71622691/1e95643d-26d8-4532-8d32-8f73369677ef)

- 관리자와 마스터는 사원의 연차 일수를 조절 할 수 있습니다.
- 마스터는 사원의 직급을 변경할 수 있습니다.
- 사원명을 검색해 원하는 사원을 찾을 수 있습니다.
