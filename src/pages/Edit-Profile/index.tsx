import Navbar from "../../components/navbar";
import UserImage from "../../assets/User.png";
import * as C from "./styles";
import Arrow from "../../assets/CaretDown.png"
import { useState } from "react"

const Profile = () => {
  const [selectValue, setSelecValue] = useState<String>("")
    const [options, setOptions] = useState<Boolean>(false)
    

    const Options = [
        {_id: "1", name: "Solteiro" },
        {_id: "2", name: "Casado"},
        {_id: "3", name: "Divorciado"},
        {_id: "4", name: "Namorando"},
        {_id: "5", name: "Preocupado"}
    ]
  return (
    <>
      <Navbar
        thereIsLoggedOut={false}
        thereIsProfile={true}
        thereIsUserEdit={true}
      />
      <C.DivCenter>
        <C.EditsAndLeftProfile>
          <C.LeftProfile>
            <C.divImg>
              <C.UserImage src={UserImage}></C.UserImage>
            </C.divImg>
          </C.LeftProfile>
        </C.EditsAndLeftProfile>
        <C.CenterProfile>
            <C.title>Editar informações
          </C.title>

                      <C.divInput>
                         <C.Input widthButton={"13.4375rem"} marginTop={"5.75rem"} type="text" id="Name" name="Name" placeholder="Profissão"></C.Input>


                        <C.Input widthButton={"13.4375rem"} marginTop={"1.19rem"} type="text" id="Name" name="Name" placeholder="Nome"></C.Input>

                        <C.Input widthButton={"13.4375rem"} marginTop={"1.25rem"} type="text" id="City" name="City" placeholder="Cidade"></C.Input>

                        <C.Input widthButton={"7.8125rem"} marginTop={"1.5rem"} type="text" id="Country" name="Country" placeholder="País"></C.Input>

                        <C.Input widthButton={"7.8125rem"} marginTop={"1.5rem"} type="date" id="Date" name="Date" placeholder="Data"></C.Input>

                        <C.Input widthButton={"13.8125rem"} marginTop={"1.5rem"} type="password" id="password" name="password" placeholder="Senha"></C.Input>

                        <C.Input widthButton={"13.8125rem"} marginTop={"1.5rem"} type="password" id="password" name="password" placeholder="Repetir senha"></C.Input>
                        </C.divInput>

                        <C.divSelect>
                            <C.AreaSelect onClick={() => setOptions(!options)}>
                              <C.Select >
                                {selectValue === ""? "Relacionamento" : selectValue}
                              </C.Select>
                              <C.Arrowimg src={Arrow} alt="caretdown" />
                                {options &&
                              <C.AreaOptions>
                                {Options.map((option, index, Options) => (
                                    <div key={index}>
                                        <C.Option onClick={() => setSelecValue(option.name)}>{option.name}</C.Option>
                                        {index !== Options.length - 1 && <C.LineOption></C.LineOption>}
                                    </div>
                                    ))}
                              </C.AreaOptions>
                        }
        
                    </C.AreaSelect>
                   </C.divSelect>
                    <C.Button1>Salvar</C.Button1>

                  
          
        </C.CenterProfile>


      </C.DivCenter>
    </>
  );
};

export default Profile;