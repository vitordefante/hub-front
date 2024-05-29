import React from 'react';
import 'antd/dist/reset.css'; // Importa o CSS do Ant Design
import { Button, Checkbox, Flex, Form, Grid, Input, theme, Typography} from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import logo from './images/LOGOV2-2.png';


const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

function App() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: "480px"
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    forgotPassword: {
      float: "right",
      color: "#730007"
    },
    header: {
      marginBottom: token.marginXL
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  };

  return (
    <div className='mainWrapper' style={{display:'flex'}}>
      <div className='form' style={{width:'50%'}}>
      <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          
          <Title style={styles.title}>Login</Title>
          <Text style={styles.text}>Bem-vindo de volta ao RoomHub. Insira seus detalhes abaixo para efetuar o login.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
          style={{marginBottom: 20}}
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Por gentileza insira seu Email!",
              },
            ]}
          >
            <Input
              style={{height: 40}}
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por gentileza insira sua senha!",
              },
            ]}
          >
            <Input.Password
              style={{height: 40}}
              prefix={<LockOutlined />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              < Checkbox>Lembrar-me</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Esqueceu sua senha?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block="true" style={{backgroundColor:'#730007', color:'white', border:'none'}} htmlType="submit">
              Log in
            </Button> 
            <div style={styles.footer}>
              <Text style={styles.text}>Não possui uma conta?</Text>{" "}
              <Link style={{color:'#730007'}} href="">Cadastre-se agora</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
        

      </div>

      <div className='logo' style={{backgroundColor:'#730007', width:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img style={{width:300, margin: 0}} src={logo}></img>
      </div>

    </div>
  );
}

export default App;
