import axios from "axios";
import React, { useRef, useState,forwardRef,useImperativeHandle } from "react";

const SearchMusic = forwardRef(({ getChildSearchResult },ref) => {
  useImperativeHandle(ref, () => ({
    clear,
  }));
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState({
    vocalList: [],
    melodyList: [],
    soundTrackList: [],
  });
  const types = [
    { value: "melodyList", title: "멜로디" },
    { value: "vocalList", title: "보컬" },
    { value: "soundTrackList", title: "음원" },
  ];
  const clear = () => {
    setIsSearch(false)
    setQuery("")
    setSearchData(
      {
        vocalList: [],
        melodyList: [],
        soundTrackList: [],
      }
    )
  }
  
  const beatherbMusic = async (id, title) => {
    axios({
      url: "http://localhost:8080/api/content/load/" + title,
      method: "GET",
      responseType: "arraybuffer",
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: "audio/mp3" }); // Blob 객체 생성
        let file = new File([blob], title + ".mp3", {
          type: "audio/mp3",
          lastModified: new Date(),
        });
        let url = URL.createObjectURL(file);
        getChildSearchResult(url,title,id)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const changeInputValue = (event) => {
    setQuery(event.target.value);
  };

  const searchBtnClick = async () => {
    if (query === "") {
      alert("검색어를 입력하세요")
      return
    }
    setIsSearch(true);
    axios({
      url: "https://node5.wookoo.shop/api/content/search?title=" + query,
      method: "GET",
    })
      .then((response) => {
        console.log("response.data", response.data.data);
        setSearchData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const clickMusicBtn = async (id, title) => {
    await beatherbMusic(id, title);
  };


  return (
    <div>
      <div className="flex">
        <input
          type="text"
          placeholder="찾을 음원 제목을 입력해주세요."
          className="input input-ghost w-full mx-3"
          value={query}
          onChange={changeInputValue}
        />
        <button onClick={searchBtnClick} className="btn btn-primary btn-m">
          검색
        </button>
      </div>
      {isSearch ? (
        <div className="px-10 grid grid-cols-1 pt-10 gap-4 max-h-48">
          <div className="max-h-48" style={{ overflow: "scroll", overflowX: "hidden" }}>
            {types.map((type) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
                key={type.value}>
                <p className="text-left">{type.title}</p>
                <div>
                  {/* <div className="max-h-48" style={{ overflow: "scroll", overflowX: "hidden" }}> */}
                  {searchData[type.value].map((value, index) => (
                    <div
                      className="w-full flex bg-neutral-700 p-2 rounded-xl"
                      key={value.id}
                      onClick={() => clickMusicBtn(value.id, value.title)}>
                      <p
                        className="text-base-content m-1 w-2/3"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          justifyItems: "start",
                          textAlign: "start",
                        }}>
                        {value.title}
                      </p>
                      <p
                        className="text-base-content m-1 w-1/3"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>
                        {value.creatorList.map((value, index) => (
                          <span key={index}>{value.nickname} </span> // 배열의 각 항목을 화면에 표시
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
})

export default SearchMusic