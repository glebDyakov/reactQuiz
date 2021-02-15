import axios from 'axios'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import React,{Component} from 'react'
import classes from './Auth.css'
import 
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

class Auth extends Component{
    state={
        isFormValid:false,
        fromControl:{
            email:{
                value:'',
                type:'email',
                label:'email',
                errorMessage:'введите корректный email',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                value:'',
                type:'password',
                label:'пароль',
                errorMessage:'введите корректный пароль',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    minLength:6
                }
            }
        }
    }
    loginHandler=()=>{
        this.props.auth(this.state.formControls.value,this.state.formControls.password.value,true)
        // const authData={
        //     email:this.state.formControls.value,
        //     passwordemail:this.state.formControls.password.value,
        //     returnSecureToken:true
        // }
        // try{
        //     const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', authData)
        // }catch(e){
            
        // }
    }
     registerHandler=()=>{
        this.props.auth(this.state.formControls.value,this.state.formControls.password.value,false)
        // const authData={
        //     email:this.state.formControls.value,
        //     passwordemail:this.state.formControls.password.value,
        //     returnSecureToken:true
        // }
        // try{
        //     const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', authData)
        // }catch(e){

        // }
    }
    submitHandler=(event)=>{
        event.preventDefault()   
    }
    validateControl(value,validation){
        if(!validation){
            return true
        }
        let isValid=true
        if(validation.required){
            isValid=value.trim() !== '' && isValid
        }
        if(validation.email){
            isValid=is.email(value) && isValid
        }
        if(validation.minLength){
            isValid=value.length>=validation.minLength '' && isValid
        }
        return isValid
    }
    onChangeHandler=(event,controlName)=>{
        const formControls={...this.state.formControls}
        const control={...formControls[controlName]}
        control.value=event.target.value
        control.touched=true
        control.valid=this.validateControl(control.value,control.validation)
        formControls[controlName]=control
        let isFormValid=true
        Object.keys(formControls).forEach(name=>{
            isFormValid=formControls[name].valid && isFormValid
        })
        this.setState({
            formControls, isFormValid
        })
    }
    renderInputs(){
        const inputs=Object.keys(this.state.formControls).map((controlName,index)=>{
            const control=this.state.formControls[controlName]
            return (
                <Input key={controlName + index} type={control.type} value={control.value} touched={control.touched} valid={control.valid} label={control.label} errorMessage={control.errorMessage} shouldValidate={!!control.validation} onChange={event=>this.onChangeHandler(event,controlName)}/>
            )
        })
        return inputs
    }

    render(){
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        {/* <Input label="Email"/>
                        <Input label="Пароль"/> */}
                        <Button disabled={!this.state.isFormValid} type='success' onCLick={this.loginHandler}>Войти</Button>
                        <Button disabled={!this.state.isFormValid} type='primary' onCLick={this.registerHandler}>зарегестрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){

}
function mapDispatchToProps(dispatch){
    return {
        auth:(email,password,isLogin)=>dispatch(auth(email,password,isLogin))
    }
}
export default connect(null,mapDispatchToProps)(Auth)