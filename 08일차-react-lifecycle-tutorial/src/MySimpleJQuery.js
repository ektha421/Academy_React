import React from 'react';
// jQuery 참조
import $ from 'jquery';

/** jQuery 사용 방법을 확인하기 위한 샘플 컴포넌트 */
class MySimpleJQuery extends React.Component {
    /** 버튼의 라벨을 처리하기 위한 state값 */
    state = {
        btnLabel: 'show'
    };

    /** 버튼 클릭시 호출될 이벤트 핸들러 */
    handleToggle = (e) => {
        // 버튼의 라벨이 show이면 hide로, 그렇지 않으면 show로 상태값 재설정
        this.setState({
            btnLabel: this.state.btnLabel === "show" ? "hide" : "show"
        });

        // 탐색 결과를 jQuery 객체로 생성하여 jQuery 기능을 사용한다.
        const currentEl = $(this.refs.toggle);
        currentEl.slideToggle(100, () => {
            console.log('jQuery의 slideToggle이 실행되었습니다.');
        });
    };

    /** 화면 렌더링 함수 */
    render() {
        return (
            <div>
                <h2>My Simple JQuery</h2>
                
                <button type="button" onClick={this.handleToggle}>
                    {this.state.btnLabel}
                </button>
                
                <ul ref='toggle' hidden>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                    <li>Item5</li>
                </ul>

                <hr/>
            </div>
        );
    }
}

export default MySimpleJQuery;