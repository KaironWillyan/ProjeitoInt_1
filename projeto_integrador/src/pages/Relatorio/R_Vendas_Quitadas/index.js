import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import  "../Grafico/graficos.css"
=======
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef

function VendasQuitadas() {
    const data = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }
        ]
    };

    return (
<<<<<<< HEAD
        <div className='containerR'>
        <div className='grafico'>
            <Chart className= {"grafico1"}
=======
        <div>
        <div className='grafico'>
            <Chart
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
                options={data.options}
                series={data.series}
                type="bar"
                width={500}
                height={320}
            />
        </div>
<<<<<<< HEAD

        <div class="tags">
            <p>Cliente com maior numero de pendencias: </p>
            <p>Cliente com menor numero de pendencias: </p>
        </div>
        <Link to = {"/Relatorio"}>
            <button className='botao-voltar'>
=======
        <Link to = {"/Relatorio"}>
            <button>
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
                Voltar 
            </button>
        </Link>
        </div>
    );
}

<<<<<<< HEAD

=======
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
export default VendasQuitadas;


