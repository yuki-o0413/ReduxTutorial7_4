import React, { Component } from 'react';

import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Content from './components/Content';
import List from './components/List';


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() { // 追加
        const id = "test99"
        const name = "テスト太郎"
        this.props.didMnt(id,name);
        console.log(this.props)
    }
    // formId
    onChangeId = (e) => {
        console.log(e.target.value)
        this.props.updateFormId(e.target.value);
    }
    // forName
    onChangeName = (e) => {
        console.log(e.target.value)
        this.props.updateFormName(e.target.value);
    }
    // clickSaveButton
    onSaveItem = () => {
        console.log(this.props)
        console.log("SAVE_ID: ",this.props.register.id);
        console.log("SAVE_NAME: ",this.props.register.name);
        $('#toast1').toast('show');
    }

    render() {
        // const formItem = this.props
        const id = this.props.register.id;
        const name = this.props.register.name;

        // formEvent
		// const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeId, onChangeName, onSaveItem })
        console.log('App.render:', this.props);

        //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
        const checkName = name.length >=3;

        return (
            <>
                <Aside />
                <Header />
                    sample site
                {/* <div className="row">
                    <div className="col-5">
                        <p>test</p>
                    </div>
                </div> */}
                <Top />
                <div id="register">
                    <List/>
                    <Content
                        id={id}
                        name={name}
                        // {...contentHandler(this)}
                        onChangeId={this.onChangeId}
                        onChangeName={this.onChangeName}
                        onSaveItem={this.onSaveItem}
                        checkName={checkName}
                    />
                </div>
                <Footer />
            </>
        );
    }
}
export default App;
