'use strict';
import React from 'react';

export default function SideMenu(props) {
    return (
        <nav>

            <label htmlFor="menu_bar01" className="nav-label"><i className="fas fa-chart-line margin-right10"></i>アクティビティ</label>
            <input type="checkbox" id="menu_bar01" className="nav-input" />
            <ul id="links01">
                <li><a href="/activities/wiki_pages.html">Wikipedia</a></li>
                <li><a href="/activities/twitter_master_user_lookups.html">Twitter</a></li>
            </ul>

            <label htmlFor="menu_bar02" className="nav-label"><i className="fas fa-comments margin-right10"></i>話題</label>
            <input type="checkbox" id="menu_bar02" className="nav-input" />
            <ul id="links02">
                <li><a href="/topics/twitter_master_get_searches.html">Twitter</a></li>
            </ul>

            <label htmlFor="menu_bar03" className="nav-label"><i className="fas fa-user-shield margin-right10"></i>影響</label>
            <input type="checkbox" id="menu_bar03" className="nav-input" />
            <ul id="links03">
                <li><a href="/influence/twitter_master_user_timelines.html">Twitter</a></li>
            </ul>

            <label htmlFor="menu_bar04" className="nav-label"><i className="fas fa-thumbs-up margin-right10"></i>フォロワー</label>
            <input type="checkbox" id="menu_bar04" className="nav-input" />
            <ul id="links04">
                <li><a href="/followers/twitter_follower_user_lookups.html">Twitter</a></li>
            </ul>

            <label htmlFor="menu_bar05" className="nav-label"><i className="fas fa-user-friends margin-right10"></i>共通性</label>
            <input type="checkbox" id="menu_bar05" className="nav-input" />
            <ul id="links05">
                <li><a href="/similarities/twitter_master_follower_ids.html">Twitter</a></li>
            </ul>

            <label htmlFor="menu_bar06" className="nav-label"><i className="fas fa-cog margin-right10"></i>設定</label>
            <input type="checkbox" id="menu_bar06" className="nav-input" />
            <ul id="links06">
                <li><a href="/settings/group_masters.html">グループ</a></li>
                <li><a href="/settings/person_masters.html">人物</a></li>
                <li><a href="/settings/stock_events.html">イベント設定</a></li>
            </ul>


        </nav>
    )
}