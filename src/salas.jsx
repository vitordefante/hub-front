// contem um ojeto com as salas disponiveis para mostrar no card home, semelhante airbnb
// contem titulo da sala, descricao, preco, imagem, e localizacao

import React from 'react';
import { Card, Col, Row, Button, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, MenuOutlined,UserOutlined } from '@ant-design/icons';

import logo from './images/LOGOV23.png';

import ListaSalas from './listaSalas';


const { Meta } = Card;

const salas = ListaSalas;
console.log(salas);


const Salas = () => {
    return (
        <div>
            <div className='navbar' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                <div className='logo'> <img style={{width:125, margin: 0}} src={logo}></img>
            </div>

            <div className='profileMenu'>
                <Button  style={{display:'flex', alignItems:'center', justifyContent:'space-evenly',  width:'90px', height:'40px', borderRadius:'40px'}}>
                    <MenuOutlined />
                    <Avatar style={{ backgroundColor: '#730007' }} icon={<UserOutlined />} />
                </Button>
                

            </div>
        </div>
            <div className='site-card-wrapper' >
                <Row gutter={16 } style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', padding:'65px', paddingTop:'30px'}}>
                    {salas.map((sala) => (
                        <Col span={3.5}>
                            <Card
                                hoverable
                                style={{ width: 240 , marginBottom:25}}
                                cover={<img alt='example' src={sala.image} />}
                                actions={[<Button style={{width:'90%', height:'90%'}} type='primary'>Reservar </Button>, <Button style={{width:'90%', height:'90%'}} > Detalhes</Button>]}
                            >
                                <Meta title={sala.title} description={sala.description} />
                                <p style={{fontWeight:'bold'}}>{sala.price}</p>
                                <p>📍 {sala.location}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Salas;
