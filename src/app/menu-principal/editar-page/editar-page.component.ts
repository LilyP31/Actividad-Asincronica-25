import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Addregistro } from 'src/app/models/addregistro';

@Component({
  selector: 'app-editar-page',
  templateUrl: './editar-page.component.html',
  styleUrls: ['./editar-page.component.css']
})
export class EditarPageComponent implements OnInit {

  datos: Addregistro = {Id: '', Nombre: '', Apellido:'', Correo:'', Role:'', Title:'', Password:''};
  

  constructor(private formBuilder : FormBuilder, private userService : UserServicesService, private router : Router,
    
    private route : ActivatedRoute) {
    
  }
  
  //Validacion  //
  registroForm = this.formBuilder.group({

    Id: ['', Validators.required],
    Nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
    Correo: ['', [Validators.required, Validators.email]],
    Role: ['', Validators.required],
    Title: ['', Validators.required],
    Password: ['', Validators.required],
  });

  // Metodo Get
  get Id() {return this.registroForm.get('Id')}
  get Nombre() {return this.registroForm.get('Nombre');}
  get Apellido() {return this.registroForm.get('Apellido');}
  get Correo() {return this.registroForm.get('Correo');}
  get Role() { return this.registroForm.get('Role'); }
  get Title() { return this.registroForm.get('Title'); }
  get Password() { return this.registroForm.get('Password'); }
  

  ngOnInit() {
    this.datos.Id = this.route.snapshot.params['id'].toString()

  }


  onSubmit(){
    
    
    this.datos.Nombre = this.registroForm.getRawValue().Nombre || '';
    this.datos.Apellido = this.registroForm.getRawValue().Apellido || '';
    this.datos.Correo = this.registroForm.getRawValue().Correo || '';
    this.datos.Role = this.registroForm.getRawValue().Role || '';
    this.datos.Title = this.registroForm.getRawValue().Title || '';
    this.datos.Password = this.registroForm.getRawValue().Password || '';
    
    console.log(this.datos)
    this.userService.updateUser(this.datos).subscribe();
     if(confirm("¿Seguro que deseas actualizar los datos?"))
    {
      alert("Actualización Exitosa")
      this.registroForm.reset();
    this.router.navigate(['/lista']);}
}

Cancel(){
  if(confirm("¿Seguro que deseas regresar? Todos los datos ingresados se perderán.")){
    this.registroForm.reset();
    this.router.navigate(['/lista']);
  }
}

}
