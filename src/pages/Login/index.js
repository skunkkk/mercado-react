import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Login() {
  const {setNome,setSaldo, saldo, nome}=useContext(UsuarioContext);
  const history=useHistory();
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          onChange={(e)=>setNome(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        onChange={(e)=>setSaldo(e.target.value)}
        type="number"
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length<4 || saldo<=0  }
        onClick={()=>history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;