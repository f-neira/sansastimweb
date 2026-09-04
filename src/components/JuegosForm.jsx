import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react'

function JuegosForm({onCreateJuego= () => {}}) {
    const companias = [{ label: "Sony", value: "sony" },
    { label: "Microsoft", value: "microsoft" },
    { label: "Nintendo", value: "nintendo" }];

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [compania, setCompania] = useState(companias[0].value)
    const [plataforma, setPlataforma] = useState("") 
    const [anio, setAnio] = useState(null)
    const [tieneFisico, setTieneFisico] = useState(false)

    const handleClick = () => {
        //1. Crear un objeto con el contenido del juego.
        const juego = {
            nombre: nombre,
            descripcion: descripcion,
            compania: compania,
            plataforma: plataforma,
            anio: anio,
            tieneFisico: tieneFisico
        }

        //2. "avisarle" al container que hay un nuevo juego.
        onCreateJuego(juego)
    }

    return (
        <Card raised>
            <CardHeader title="Registrar juegos" ></CardHeader>
            <CardContent>
                <div className="mt-3">
                    <TextField
                        label="Nombre"
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                        fullWidth
                        id='nombre-juego'
                    ></TextField>
                </div>
                <div className="mt-3">
                    <TextField
                        multiline
                        label="Descripcion"
                        value={descripcion}
                        onChange={e=>setDescripcion(e.target.value)}
                        fullWidth
                        id="desc-juego"
                    ></TextField>
                </div>
                <div className="mt-3">
                    <Select fullWidth id="compania-juego" label="Compañia" >
                        { companias.map((c)=> 
                            <MenuItem value={c.value}>{c.label}</MenuItem>
                        )}
                    </Select>
                </div>
                <div className="mt-3">
                    <TextField
                        id="plataforma-juego"
                        label="Plataforma"
                        value={plataforma}
                        onChange={e=>setPlataforma(e.target.value)}
                        fullWidth
                    ></TextField>
                </div>
                <div className="mt-3">
                    <DatePicker
                        value={anio}
                        onChange={v=>setAnio(v)} 
                        fullWidth
                        id="anio-juego"
                        label="Año de lanzamiento"
                    ></DatePicker>
                </div>
                <div className="mt-3">
                    <FormControlLabel 
                        id="fisico-juego" 
                        label="Tiene version fisica?"
                        labelPlacement='start'
                        checked={tieneFisico}
                        onChange={e=>setTieneFisico(e.target.checked)}
                        control={<Switch/>}
                    ></FormControlLabel>
                </div>

            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    variant='outlined'
                    color="secondary"
                    onClick={handleClick}
                >Registrar Juego</Button>
            </CardActions>
        </Card>
    )
}

export default JuegosForm
