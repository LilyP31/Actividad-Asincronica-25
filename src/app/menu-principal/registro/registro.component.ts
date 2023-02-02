import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addregistro } from 'src/app/models/addregistro';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

 
  datos: Addregistro[] = [{Id: '', Nombre: '', Apellido:'', Correo:'', Role:'', Title:'', Password:''}];
  

  constructor(private formBuilder : FormBuilder, private userService : UserServicesService, private router : Router) {
    
  }
  
  //Validacion  //
  registroForm = this.formBuilder.group({

    Id: ['', Validators.required],
    Nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
    Correo: ['', [Validators.required, Validators.email]],
    Role: ['', Validators.required],
    Title : ['', Validators.required],
    Password: ['', Validators.required],
  });

  // Metodo Get
  get Id() {return this.registroForm.get('Id')}
  get Nombre() {return this.registroForm.get('Nombre');}
  get Apellido() {return this.registroForm.get('Apellido');}
  get Correo() {return this.registroForm.get('Correo');}
  get Role() {return this.registroForm.get('Role'); }
  get Title() {return this.registroForm.get('Title');}
  get Password() {return this.registroForm.get('Password');}





  onSubmit(){
    
    this.datos[0].Id = this.registroForm.getRawValue().Id || '';
    this.datos[0].Nombre = this.registroForm.getRawValue().Nombre || '';
    this.datos[0].Apellido = this.registroForm.getRawValue().Apellido || '';
    this.datos[0].Correo = this.registroForm.getRawValue().Correo || '';
    this.datos[0].Password = this.registroForm.getRawValue().Password || '';
    this.datos[0].Title = this.registroForm.getRawValue().Title || '';
    this.datos[0].Role = this.registroForm.getRawValue().Role || '';

    this.userService.postUser(this.datos[0]).subscribe(
      (usuario: Addregistro)=> {console.log(usuario);
        alert("Registro Exitoso!! :D");
        this.registroForm.reset()
        this.router.navigate(['/lista']);
      });
}
  
  /*  this.datos.Id = this.registroForm.value.Id ? this.registroForm.value.Id : '';
    this.datos.Nombre = this.registroForm.value.Nombre ? this.registroForm.value.Nombre : '';
    this.datos.Apellido = this.registroForm.value.Apellido ? this.registroForm.value.Apellido : '';
    this.datos.Correo = this.registroForm.value.Correo ? this.registroForm.value.Correo : '';
    this.datos.Password = this.registroForm.value.Password ? this.registroForm.value.Password : '';
    this.datos.Title = this.registroForm.value.Title ? this.registroForm.value.Title : '';
    this.datos.Role = this.registroForm.value.Role ? this.registroForm.value.Role : '';*/
  
   /* this.userService.postUser(this.datos[0]).subscribe(
      (usuario: Addregistro)=> {console.log(usuario);
      });
  
      alert("Registro Exitoso!! :D");
     this.registroForm.reset()
      this.router.navigate(['/lista']);
    }*/

  Cancel(){
    if(confirm("¿Seguro que deseas borrar el formulario? Todos los datos ingresados se perderán.")){
      this.registroForm.reset();
    }
  }

}
