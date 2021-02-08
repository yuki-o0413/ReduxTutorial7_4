'use strict';
import React from 'react';

export default function Header(props) {

    return (
        <>
            <header className="_1uf458w8">
                <div className="_eqf9j0">
                    <div className="_otdka">
                        <a className="_i0dxben" aria-label="YOJIホームページ" href="/">
                        </a>
                        <div aria-label="メインナビゲーションメニュー">

                        </div>
                        <div className="onImg">
                            <button className="_b2fxuo" type="button">
                                <div className="_1g5ss3l" id="littleSearchLabel">検索をはじめる</div>
                            </button>
                            <form className="_1keztfl" action="/s/all" method="get" role="search">
                                <div className="_17fy1ix" role="tablist" aria-label="何かお探しですか？">
                                    <label htmlFor="search-block-tab-false-STAYS" className="_3hmsj">
                                        <span className="_1ea7qej" data-text="true">宿泊先</span>
                                    </label>
                                    <label htmlFor="search-block-tab-false-EXPERIENCES" className="_3hmsj">
                                        <span className="_1ea7qej" data-text="true">体験</span>
                                    </label><a className="_1gwzhbum">オンライン体験</a>
                                </div>
                                <label className="_n3o7pji" htmlFor="bigsearch-query-detached-query">ロケーション</label>
                                <span id="Koan-query__description" className="_krjbj">おすすめの結果を表示するには次に進んでく  ださ  い</span>
                                <div className="_wtz1co">チェックイン</div>
                                <div className="_uh2dzp">日付を追加</div>
                                <div className="_wtz1co">チェックアウト</div>
                                <div className="_uh2dzp">日付を追加</div>
                                <div className="_wtz1co">人数</div>
                                <div className="_uh2dzp">ゲスト数を追加</div>
                                <div className="_c5qlo1f">探す</div>
                                <div className="_iglww7">ホストになる</div>
                            </form>
                        </div>
                        <picture>
                            <img className="_dae4t6" id="FMP-target" src="https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1920" />
                        </picture>
                    </div>
                </div>
            </header>
        </>
    )
}
