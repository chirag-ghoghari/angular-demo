import { Routes } from '@angular/router';
import { DataBindingComponent } from './compo/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './compo/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './compo/directive/structural-directive/structural-directive.component';
import { PipeComponent } from './compo/pipe/pipe.component';
import { ReactiveComponent } from './compo/forms/reactive/reactive.component';
import { TemplateComponent } from './compo/forms/template/template.component';
import { GetapiComponent } from './compo/APIs/getapi/getapi.component';
import { PostapiComponent } from './compo/APIs/postapi/postapi.component';
import { AlertComponent } from './ReusebleComponent/alert/alert.component';
import { LifeCycleEventComponent } from './compo/life-cycle-event/life-cycle-event.component';
import { NgtemplateComponent } from './compo/directive/ngtemplate/ngtemplate.component';
import { ViewChildComponent } from './compo/Decorator/view-child/view-child.component';
import { LoginComponent } from './compo/login/login.component';
import { LayoutComponent } from './compo/layout/layout.component';
import { autherGuard } from './service/auther.guard';

export const routes: Routes = [
    {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
},
{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path: 'data-binding',
            component: DataBindingComponent,
            canActivate:[autherGuard]
        },
        {
            path: 'attribute-directive',
            component: AttributeDirectiveComponent
        },
        {
            path: 'structural-directive',
            component: StructuralDirectiveComponent
        },
        {
            path: 'ngtemplate',
            component: NgtemplateComponent
        },
        {
            path: 'pipe',
            component:PipeComponent
        },
        {
            path: 'reactive',
            component: ReactiveComponent
        },
        {
            path: 'template',
            component:TemplateComponent
        },
        {
            path:'getapi',
            component:GetapiComponent
    
        },
        {
            path: 'postapi',
            component: PostapiComponent
        },
        {
            path: 'alert',
            component:AlertComponent
        },
        {
            path: 'life-cycle-event',
            component: LifeCycleEventComponent
        },{
            path: 'view-child',
            component: ViewChildComponent
    
        },
    ]
}
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
   
];


// {
//     path: '',
//     redirectTo:'login',
//     pathMatch: 'full'
// },
// {
//     path: 'login',
//     component: LoginComponent
// },
// {
//     path:'',
//     component:LayoutComponent,
//     children:[]
// }