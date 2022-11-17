import { Router } from "express";

const routerLogin = new Router()


routerLogin.get('/login', (req,res)=>{

    if(req.session.usuario) {
        res.render('formulario', {
            layout: 'formulario',
            mostrarRegistro: false,
            usuario: req.session.usuario,
            productosLength: 1
        })
    } else {
        res.render('formulario', {
            layout: 'formulario',
            mostrarRegistro: true,
            productosLength: 1
        })
    }

})


routerLogin.get('/logout', (req,res)=>{
    const usuario = req.session.usuario
    req.session.destroy(err => {
        res.render('logout', {
            layout: 'logout',
            usuario: usuario
        })
    })
})


routerLogin.post('/login', (req,res)=>{
    const {nombreUsuario} = req.body
    req.session.usuario = nombreUsuario

    res.redirect('/login')
})

export default routerLogin