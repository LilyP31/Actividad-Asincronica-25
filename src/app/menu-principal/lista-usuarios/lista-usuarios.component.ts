import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Addregistro } from 'src/app/models/addregistro';
import { UserServicesService } from 'src/app/services/user-services.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  
    
  // ************ //
  listado: Addregistro[] = [];
  displayedColumns: string[] = ['Id', 'Nombre', 'Correo', 'Role','Editar','Eliminar'];
  dataSource: any;
  clickedRows = new Set<Addregistro>();

  // ************ //

  constructor(private userService: UserServicesService, private router: Router){}

  addUser() {
    this.router.navigate(['/nuevo']);
  }

  Editar(){
    let re = confirm('Deseas editar este registro?')
     if(re){
    this.router.navigate(['/edit']);}
    else{
      return;
    }

  }


  
  Eliminar(id:string){
    let borrar = confirm('Deseas borrar este usuario?, Se borrara todo el registro!')
    if(borrar){
    this.userService.deleteUser(id).subscribe({
      next: (mensaje: string) => console.log(mensaje)
    });
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Addregistro[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
    
   }
  else{
    return;
  }
  }
  
 
 
 
  ngOnInit(){
   this.userService.getUsersAll().subscribe({
      next: (UserAll: Addregistro[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }


}