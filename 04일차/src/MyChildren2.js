import React from 'react';

/** property에 대한 값이 없을 경우를 대비한 기본값 정의 (함수형) */
const MyChildren2 = props => {
    const myStyle = {
        width: props.width + 'px',
        height: props.height + 'px'
    };

    return <textarea style={myStyle}>{props.children}</textarea>;
};

// 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyChildren2.defaultProps = {
    width: 300,
    height: 100
};

export default MyChildren2;
