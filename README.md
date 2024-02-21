# 계산기 만들기 - React

데모 링크 "https://SeungjuShin93.github.io/Mini-Calc"

## 어려웠던 점

1. 가운데 배치를 하고 싶어서 flex를 활용했는데
   Calculate 버튼을 누르기 전과 후로 Height가 달라지는 문제가 발생
2. 0일 때 예외처리가 안되었음

## 해결

1. div 박스를 만들고 div박스에 height를 주어서 높이를 고정시킴
   그 안에 result 값에 따라서 h1의 유무를 결정지었음
2. setResult를 string으로 변환시켜서 출력해서 해결하였음
