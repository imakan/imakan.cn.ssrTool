import fetch from 'isomorphic-unfetch';

export let getHospitalDetail = (hospitalName: string): Promise<any> => {
  let url = 'http://tool.imakan.cn/api/hospital';
  let params = { hospitalName };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.data){
        for (let i = 0; i < data.data.length; i++) {
          data.data[i].key = i;
        }
      }
      return data.data || '';
    });
};

export let getAllHospitalDetail = (currentPage: number, pageSize: number): Promise<any> => {
  let url = 'http://tool.imakan.cn/api/hospital/all';
  let params = { currentPage, pageSize };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.data){
        for (let i = 0; i < data.data.length; i++) {
          data.data[i].key = i;
        }
      }
      return data;
    });
};
