'use strict';
import React,{ useState } from 'react';

export default function List(props) {
  // 変数を定義
  const no = [];
  const ids = [];
  const names = [];
  const pvs = [];
  // ループでテーブルに順に入れ込むためのコード
  for (  let i = 1;  i <= 3;  i++  ) {
    // no.push(i)
    // ids.push(props.id)
    // names.push(props.name)
    // pvs.push(Math.floor( Math.random() * 1000 ))
    no.push(i)
    ids.push(i)
    names.push("name" + i)
    pvs.push(Math.floor( Math.random() * 1000 ))
  }
  // ボディのテーブルに入れ込むための変数用意
  console.log(pvs);
  const tbody =  no.map((no,index)=>{
    return(
      // このkeyがポイント！
      //https://ja.reactjs.org/docs/lists-and-keys.html
      <tr key={index}>
        <th scope="col">{no}</th><td>{ids[index]}</td><td>{ names[index] }</td><td>{pvs[index]}</td>
      </tr>
    );
  });
  return (
    <>
      {/* ブートストラップを使用している（これがあることでCSS使わなくてもグラフのラインがひかる）*/}
      <p>list</p>
      <table className="table table-striped">
        <thead>
          <tr>
              <th scope="col">NO</th>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">PV</th>
          </tr>
        </thead>
        <tbody>
          { tbody }
        </tbody>
      </table>
      </>
  );
}