import React from 'react';

class MyContactsClass extends React.Component {
    state = {
        contactData: [
            { name: '철수', phone: '010-1234-0001' },
            { name: '희영', phone: '010-1234-0002' }
        ],
        count: 2
    };

    /**
     * 추가 버튼이 클릭된 경우 호출될 이벤트 핸들러
     * (반드시 화살표 함수 형식으로 정의해야 함.)
     * @param {object} e 
     */
    onPushButtonClick = (e) => {
        this.state.count++;
        this.state.contactData.push({
            name: 'hello' + this.state.count, 
            phone: '010-1234-999' + this.state.count
        });

        this.setState(this.state);
    };

    /**
     * 삭제 버튼이 클릭된 경우 호출될 이벤트 핸들러
     * (반드시 화살표 함수 형식으로 정의해야 함.)
     * @param {index} i 삭제할 위치의 배열 인덱스
     */
    onRemoveButtonClick = (i) => {
        // i번재 위치부터 1개를 잘라냄
        this.state.contactData.splice(i, 1);
        this.setState(this.state);
    };

    render() {
        const {contactData, count} = this.state;

        return (
            <div>
                <h1>MyContactsClass</h1>
                <ul>
                    {contactData.map((contact, index) => {
                        return (
                            <li key={index+1000}>
                                <strong>{contact.name}: </strong>
                                <small style={{
                                    color: '#999',
                                    fontSize: '0.8em',
                                    marginRight: '10px'
                                }}>{contact.phone}</small>

                                <button type="button" onClick={e => {
                                    this.onRemoveButtonClick(index);
                                }}>remove</button>
                            </li>
                        );
                    })}
                </ul>
                <button type="button" onClick={this.onPushButtonClick}>Add Item</button>
                <hr />
            </div>
        );
    }
}

export default MyContactsClass;
