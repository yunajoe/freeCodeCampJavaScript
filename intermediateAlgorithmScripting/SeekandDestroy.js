// Remove all elements from the initial array that are of the same value as these arguments
// ...params => 남아있는 매개변수들을 한데 모아 배열에 집어넣어라.
// arr 중에서 param에 있는 원소들을  모두 제거하기기
function destroyer(arr, ...params) {
  if (params.length === 0) {
    return arr;
  }
  // arr 원소중에서 params에 해당되는 element들의 인덱스들을 찾아라
  let removedIdxArr = params.reduce((idxArr, value, idx) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        idxArr.push(i);
        // 아래처럼하면은 params.length만큼만 돌기 때문에 원하는 값이 다 안나온다다
        //return idxArr
      }
    }
    return idxArr;
  }, []);
  // 아래의 배열은 지워야할 인덱스를 나타낸다
  while (removedIdxArr.length) {
    let idx = removedIdxArr.shift();
    delete arr[idx];
  }
  return arr.filter((ele) => ele);
}

function destroyer(arr) {
  let newArr = Array.from(arguments);
  let originalArr = newArr[0];
  let idxes = newArr.slice(1);
  let result = [];
  for (let i = 0; i < originalArr.length; i++) {
    // idxes의 배열의 원소값이 originalArr[i]에 없을때때
    if (idxes.indexOf(originalArr[i]) === -1) {
      result.push(originalArr[i]);
    }
  }
  return result;
}
