import React, { useState, useEffect } from 'react'
import atendidosDepartmentProvider from '../../apiProvider/atendidosDepartmentProvider';
import atendidosProvider from '../../apiProvider/atendidosProvider';
import { PieChart } from '@mui/x-charts/PieChart'
import PeruMapSVG from '../../svg/PeruMapSVG';

export default function Graficas() {

    const treated = atendidosDepartmentProvider()
    const sortTreated = treated.sort((a, b) => b.cantidadCasos - a.cantidadCasos);

    const atendidos = atendidosProvider()
    const [totalPerson, setTotalPerson] = useState({ totalHombres: 0, totalMujeres: 0 });

    useEffect(() => {
        const calculateTotal = () => {
            let totalHombres = 0;
            let totalMujeres = 0;

            atendidos.forEach(item => {
                totalHombres += item.totalHombres;
                totalMujeres += item.totalMujeres;
            });

            setTotalPerson({ totalHombres, totalMujeres })
        };

        calculateTotal();
    }, [atendidos]);

    const dataPieChart = [
        { id: 1, label: 'Hombres', value: totalPerson.totalHombres },
        { id: 2, label: 'Mujeres', value: totalPerson.totalMujeres },
    ];

    return (
        <>
            <div className='bg-main-color text-center p-4 text-3xl'>
                <header className='text-white'>Mapa de calor de casos Atendidos en el Perú</header>
            </div>

            {/* PERU MAP GRAFIC */}
            <div className='flex flex-col w-full h-full md:flex-row cursor-default'>
                <div className='flex w-full md:w-1/2 '>
                    <PeruMapSVG className='w-full h-full' />
                </div>
                <div className='flex w-full md:w-1/2 justify-center align-middle p-10'>
                    <table className='bg-gray-200 w-full align-middle text-left'>
                        <thead className='border-b-2 border-main-color text-main-color bg-gray-200 text-lg'>
                            <tr>
                                <th className='px-3 py-1'>No.</th>
                                <th className='px-3 py-1'>Departamento</th>
                                <th className='px-3 py-1'>Cantidad de casos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortTreated.slice(0, 10).map((treated, index) => {
                                    return (
                                        <tr className='border-b border-gray-300 hover:bg-gray-400'>
                                            <td className='px-3 py-1'>{index + 1}</td>
                                            <td className='px-3 py-1'>{treated.departamento}</td>
                                            <td className='px-3 py-1'>{treated.cantidadCasos}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* PIE CHART */}

            <div className='bg-main-color text-center p-4 text-3xl'>
                <header className='text-white'>Casos por diagnostico en el Perú</header>
            </div>

            <div className='flex flex-col w-full h-full md:flex-row'>
                <div className='flex w-full md:w-1/3 items-center'>
                    <PieChart
                        colors={['olive', 'darkcyan']}
                        series={[
                            {
                                data: dataPieChart,
                                highlightScope: { fade: 'global', highlight: 'item' },
                                faded: { additionalRadius: -30, color: 'gray' },
                                cornerRadius: 5,
                                paddingAngle: 5
                            }
                        ]}
                        width={600}
                        height={400}
                    />
                </div>
                <div className='flex w-full md:w-2/3 justify-center align-middle p-10 overflow-x-auto'>
                    <table className='bg-gray-200 w-full align-middle text-left'>
                        <thead className='border-b-2 border-main-color text-main-color bg-gray-200 text-lg text-center'>
                            <tr>
                                <th className='px-3 py-1'>No.</th>
                                <th className='px-3 py-1'>Diagnostico</th>
                                <th className='px-3 py-1'>Total Hombres</th>
                                <th className='px-3 py-1'>Total Mujeres</th>
                                <th className='px-3 py-1'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                atendidos.map((at, index) => {
                                    return (
                                        <tr className='border-b border-gray-300 hover:bg-gray-400 text-sm'>
                                            <td className='px-3 py-1 text-center'>{index + 1}</td>
                                            <td className='px-3 py-1 text-xm'>{at.Diagnostico}</td>
                                            <td className='px-3 py-1 text-center'>{at.totalHombres}</td>
                                            <td className='px-3 py-1 text-center'>{at.totalMujeres}</td>
                                            <td className='px-3 py-1 text-center'>{at.totalGeneral}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}
