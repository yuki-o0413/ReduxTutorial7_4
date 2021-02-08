docker-compose up
  →http://localhost:8080/sample/sample.html


(略)
<!-- 前提	ConoaHaサーバー、IPアドレス、rootPass -->
<!--  -->
<!-- ①環境構築 -->
  <!-- ①OSの確認 -->
	<!-- ②必要なモジュールをインストール -->
	<!-- ③Nginxインストール -->
	<!-- ④Nginxの自動化 -->
	<!-- ⑤firewall設定 -->
	<!-- ⑥firewall確認 -->
	<!-- ⑦Nginx設定ファイル	ドキュメントルートを変更 -->
	<!-- ⑧Node.jsインストール -->
	<!-- ⑨reactアプリ作成 -->
	<!-- ⑩アクセス	npm start 	http://xxx.xx.xx.xxx:3000/ -->
<!-- 前提	環境構築で作成したreactサンプルApp -->

②JSXに慣れよう
  ①スタート画面の文字を変える
	②変数を表示
	③変数をタグを入れて表示する	{}で変数を囲い、変数にhtmlを入れて表示
	④関数を表示	functionを作りreturn下でhtmlを埋め込む。
前提	参照:https://github.com/sugiurae/react-tutorial_part3

③コンポーネント	first.txtからセットアップ
	コンポーネント基礎	https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%99%E3%83%BC%E3%82%B9
	①header.js/content.jsを確認
	②それぞれのファイルをApp.jsへimport
	③それぞれのコンポーネントをApp.jsから表示させる
前提	参照:https://github.com/sugiurae/react-tutorial_part4

④HTML/CSS編	first.txtからセットアップ
	①html/index.htmlへcssファイルを読み込む	/html/css/main.cssにgoogle-font導入しindex.htmlへ読み込む
	②index.htmlへbootstrapを読み込む	CDNを使う。
	③background-colorをbodyに当てる
	④table作成	contet.jsでテーブルの作成、bootstarp当てる
		ループでid,nameを１０人分作る、pvは毎回、毎行ランダムに表示するようにする。
		id,name,pv要素をそれぞれ描画
前提	参照:https://github.com/sugiurae/react-tutorial_part5

⑤props	first.txtからセットアップ
	①app.js側からの変数をTop.jsへ送る	app.jsで変数を作り、Top.jsへ渡しTop.jsからconsole.logを出す
	②propsをTop.jsから実際に表示	HTMLタグで囲い表示
	③props復習	https://ja.reactjs.org/docs/components-and-props.html			https://ja.reactjs.org/docs/components-and-props.html
前提	参照:https://github.com/sugiurae/react-tutorial_part6

⑥redux
  ①reduxの基礎を学ぶ	Reduxの３原則
	②formを作成してlogを出す	formタグをcontent.jsで作りonChange時にconsole.logで内容が出るようにする。
		ID,NAMEを出力
	③saveボタンを押してlogを出す	ボタンををしてonClick時にformのID、NAMEをlogで出力。
		NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
前提	参照:https://github.com/sugiurae/react-tutorial_part7

⑦基礎確認編
  ①didMntで初期データ作成、formタグ導入	didMntで初期データを作りpropsにしcontent.js側に初期データを表示させたformを作成
	②formでpropsの更新	初期データを上書きしsaveボタンでlogが出るようにする。
	③bootstrapのtoastをSAVEボタンに当てる	saveボタンを押すと現在のform情報がポップアップされるようにする。
	④外部通信	以下のURLのデータからテーブルを描画　セレクトで必要な情報のみが表示されるようにする
		http://ja.wikipedia.org/w/api.php?format=json&action=query&prop=pageviews&titles=React&pvipdays=30
		https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=pageviews&titles=PHP&pvipdays=30
		https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=pageviews&titles=HTML&pvipdays=30