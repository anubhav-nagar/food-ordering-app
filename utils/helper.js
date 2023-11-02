import restraunts from '../data/data';

export function filterList(searchValue) {
    const filteredData = restraunts.filter((res)=>{
      if(res.info.name.toLowerCase().includes(searchValue.toLowerCase())){
        return res;
      }
    })
    return filteredData;
  }
