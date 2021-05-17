import React from 'react';
import { Timeline, Card, Divider } from 'antd';
import './index.css';
import p1 from './img/mao_5_5.png'
const { Meta } = Card;

function LineCard(props) {
    //pic, title, desc
    return <Card
        hoverable
        style={{ width: 200 }}
        cover={<img alt="img" src={props.pic} />}
    >
        <Meta title={props.title} description={props.desc} />
    </Card>
}

const TimeLine = () => {

    return <div>
        <Divider>Time Line</Divider>
        <Timeline mode={"left"}>
            <Timeline.Item label="2021-05-05">
                <LineCard pic={p1} title={"生活不易"} desc={"猫猫叹气"} />
            </Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">
                <LineCard pic={p1} title={"tit"} desc={"dfs"} />
            </Timeline.Item>
            <Timeline.Item>Technical testing</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        </Timeline>
    </div>
}


export default TimeLine;