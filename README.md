# Tooltip

### 빠른 미리보기 : https://tooltip-delta.vercel.app/
### 실행 : npm start
### Tools
 - React
 - TypeScript
 - styled-components
    - CSS파일로 이동하지 않아도 되서 생산성 및 유지 보수측에서 좋음.
    - 스타일 충돌 방지로, 독립적인 컴포넌트 스타일 개발 가능.
 - ESLint, Prettier
    - 예상치 못한 오류 및 버그를 방지하기 위함.
    - 코드 스타일의 일관성 유지를 하기 위함.
    - 실시간 디버깅으로 생산성 향상.
 - FontAwesome

 ### 구조
 #### 기본적인 사용 구조
 ```ts
 <TooltipProvider>
    <Tooltip> 툴팁 박스의 내용
        <TooltipBalloon>
        툴팁 풍선의 내용
        </TooltipBalloon>
    </Tooltip>
 </TooltipProvider>
 ```
 TooltipBalloon에서 필요하지만 사용자의 편의를 위하여 props 사용을 지양할만한 부분인 setHover, tooltip의 너비 및 높이, 위치를 Context Provider를 이용해서 전달해주고 있습니다.


### Tooltip Option

> #### width
>
> > Type : string  
> > Madatory : true  
> > 툴팁 박스의 너비 설정
>
> #### height
>
> > Type : string  
> > Madatory : true  
> > 툴팁 박스의 높이 설정
>
> #### bgColor
>
> > Type : string  
> > Default : "#1aab8a"  
> > 툴팁 박스의 배경 색상 설정
>
> #### fontColor
>
> > Type : string  
> > Default : "white"  
> > 툴팁 박스의 폰트 색상 설정
>
> #### delay_timing
>
> > Type : string  
> > Madatory : false  
> > 툴팁 풍선의 노출 조건 설정 설정  
> > `enter` : 마우스 enter 후 노출  
> > `leave` : 마우스 leave 후 노출  
> > `hover` : 마우스가 툴팁 풍선에 hover시 계속해서 노출
>
> #### delay
>
> > Type : number  
> > Madatory : false  
> > 툴팁 풍선의 delay 시간 설정
>
> #### disable
>
> > Type : boolean  
> > Madatory : false  
> > 툴팁 풍선의 노출, 비노출을 컨트롤 하는 옵션

### TooltipBalloon Option

> #### balloonBg
>
> > Type : string   
> > 툴팁 풍선의 배경 색상 지정   
> > Default : "#1a2735"
>
> #### balloonFontColor
>
> > Type : string   
> > 툴팁 풍선의 폰트 색상 지정   
> > Default : "white"
>
> #### direction
>
> > Type : string   
> > 툴팁 풍선의 노출 방향 지정   
> > Default : "Top"  
> > `TL`, `Top`, `TR`, `LT`, `Left`, `LB`, `RT`, `Right`, `RB`, `BL`, `Bottom`, `BR`

## Example

### Basic Tooltip

![BasicTooltip](https://github.com/dyFlower/tooltip/assets/112444362/b059476a-fb13-4009-bc97-a8fa1a04f9a0)

```ts
<TooltipProvider>
    <Tooltip width="70px" height="20px">
    툴팁 박스 컨텐츠
    <TooltipBalloon direction="TL">
        툴팁 풍선 컨텐츠
    </TooltipBalloon>
    </Tooltip>
</TooltipProvider>
```

### DelayTooltip

![delayedTooltip](https://github.com/dyFlower/tooltip/assets/112444362/3936330b-4156-4ed9-940a-a6681c4855c5)

```ts
<TooltipProvider>
    <Tooltip width="150px" height="20px" delay_timing="enter" delay={1}>
        enter-delay 1s
        <TooltipBalloon direction="TL">
            툴팁 풍선 컨텐츠
        </TooltipBalloon>
    </Tooltip>
</TooltipProvider>
```

### ContentsTooltip

![contentTooltip](https://github.com/dyFlower/tooltip/assets/112444362/6c00bcef-abd4-4777-b7f5-3a62abf74a0c)

```ts
<TooltipProvider>
<Tooltip width="70px" height="20px" delay_timing="hover">
    툴팁 컨텐츠
    <ContentTooltipBalloon direction="Top" balloonBg="white" balloonFontColor="gray">
    <FontAwesomeIcon icon={faCircleExclamation} />
    <span> Are you sure delete this task?</span>
    <div style={{ textAlign: "right" }}>
        <button
        type="button"
        onClick={() => {
            setSelected("top");
            setShowAlert(true);
        }}
        style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
        Yes
        </button>
    </div>
    </ContentTooltipBalloon>
</Tooltip>
</TooltipProvider>
```

### CustomTooltip

![customTooltip](https://github.com/dyFlower/tooltip/assets/112444362/3507cff9-cbc3-45ab-8f27-33f2f0936a90)

```ts
<TooltipProvider>
    <Tooltip width="70px" height="20px" bgColor="yellow" fontColor="black">
        툴팁 컨텐츠
        <TooltipBalloon balloonBg="yellow" balloonFontColor="black">
            툴팁 풍선 컨텐츠
        </TooltipBalloon>
    </Tooltip>
</TooltipProvider>
```

### Disability Tooltip

![disableTooltip](https://github.com/dyFlower/tooltip/assets/112444362/c16ffb5a-6564-4fe6-9130-762736c97564)

```ts
const [disable, setDisable] = useState<boolean>(false);

<div>
    <ControlBtn
    type="button"
    disable={disable}
    onClick={() => {
        setDisable(!disable);
    }}
    >
    {disable === true ? "Enable" : "Disable"}
    </ControlBtn>
    <TooltipProvider>
        <Tooltip bgColor="gray" disable={disable} width="300px" height="40px">
        툴팁 컨텐츠
            <TooltipBalloon>
            툴팁 풍선 컨텐츠
            </TooltipBalloon>
        </Tooltip>
    </TooltipProvider>
</div>
```

## Trouble Shoot
### overflow된 부분에서의 툴팁 표현
신나게 툴팁들을 만든 뒤에 overflow scroll을 했는데, overflow된 부분에서 나타나지 않는 현상이 발생했다.   
당황해서 position과 z-index값을 수정하였지만, 무심하게도 나타나지 않았다.   
원인은 css에서 자식요소가 부모요소 밖으로는 z-index가 99999라도 절대 나타나지 않는 것.   
그러면 어떻게 해결하면 좋을까? 부모 요소 바깥으로 요소를 만들어주면 될 것이라고 생각!   
기존의 <Tooltip><TooltipBalloon></TooltipBallon></Tooltip>의 형태를 해치지 않고 부모 바깥에 TooltipBalloon이 나타나도록 하기 위하여 createPortal을 이용해서 root요소에 TooltipBalloon이 생기도록 하였다.   
그러면 이 때 위치는 어떻게 설정해야 할까??   
DOM요소를 접근하는 UseRef와 Context를 이용해서 위치에 접근하였다.   
Tooltip에서 현재 Tooltip의 크기와 뷰포트에 상대적인 위치(top, left)를 가져와서 Context를 통하여 TooltipBalloon에 전달해주었다.   
결과!!   
![overflowTooltip](https://github.com/dyFlower/tooltip/assets/112444362/72df9c7e-afc6-4688-a245-952079b7fe3c)