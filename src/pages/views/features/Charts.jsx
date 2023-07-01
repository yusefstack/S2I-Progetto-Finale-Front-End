import React from 'react'
import { useEffect, useState } from 'react'
import sfondo from '../../../images/INFO-IMAGES/SFONDO GRAFICO.png'
import axios from 'axios'
import { Line, LineChart, XAxis, Tooltip} from 'recharts'
import { motion } from 'framer-motion'
import SEO from '../../../components/SEO'

const Charts = () => {
     /* GRAPHIC */
    const [graphicWord, setGraphicWord] = useState('')
    const [graphicData, setGraphicData] = useState({})
    /* GRAPHIC INFO */
    const [lineDataKey, setLineDataKey] = useState('')
    const [xAxisDataKey, setXAxisDataKey] = useState('')

    const [width, setWidth] = useState(window.innerWidth)

    const fetchData = async () => {
        const results = await axios.get(`https://global-warming.org/api/${graphicWord}-api`)
        if(graphicWord === 'temperature') {
        setGraphicData(results.data.result)
        setLineDataKey('station')
        setXAxisDataKey('time')
        } else if (graphicWord === 'co2') {
        setGraphicData(results.data.co2)
        setLineDataKey('trend')
        setXAxisDataKey('year')
        } else if (graphicWord === 'methane') {
        setGraphicData(results.data.methane)
        setLineDataKey('average')
        setXAxisDataKey('date')
        } else if (graphicWord === 'nitrous-oxide') {
        setGraphicData(results.data.nitrous)
        setLineDataKey('average')
        setXAxisDataKey('date')
        } else if (graphicWord === 'arctic') {
        setGraphicData(results.data.arcticData)
        setLineDataKey('area')
        setXAxisDataKey('year')
        }
    }
    useEffect(() => {
        fetchData()
    }, [graphicWord]);

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
        window.removeEventListener('resize', handleResize)
        }
    })

    function handleClick(e) {
        setGraphicWord(e.target.value)
    }
    return (
    <>
        <SEO
            title="Charts"
            description="Consult real time data on global warming"
            name="Global War(n)ing!"
            type="charts"
        />
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }} 
            className='my-80 max-lg:my-0'
        >
            <div className='bg-blue-200 w-2/4 h-24 rounded-full right-14 m-auto -top-32 mb-32 max-md:w-full'>
                <div className='flex justify-around pt-8 text-xl m-auto'>
                    <button className='hover:text-orange-400 text-blue-800 text-2xl max-md:text-xl' onClick={handleClick} value="temperature">Temperature</button>
                    <button className='hover:text-orange-400 text-blue-800 text-2xl max-md:text-xl' onClick={handleClick} value="co2">CO2</button>
                    <button className='hover:text-orange-400 text-blue-800 text-2xl max-md:text-xl' onClick={handleClick} value="methane">Methane</button>
                    <button className='hover:text-orange-400 text-blue-800 text-2xl max-md:text-xl' onClick={handleClick} value="nitrous-oxide">NO2</button>
                    <button className='hover:text-orange-400 text-blue-800 text-2xl max-md:text-xl' onClick={handleClick} value="arctic">Polar ice</button>
                </div>
            </div>
            <div className='relative rounded-3xl'>
                <img className='absolute -top-28 left-14 max-lg:-top-22 max-lg:-left-24 max-xl:hidden' src={sfondo} alt="" />
                <p className='absolute rotate-90 text-5xl -left-32 bottom-2/4 text-orange-300 lg:hidden'>rotate the screen <span class="material-symbols-outlined">screen_rotation</span></p>
                <LineChart className='m-auto max-xl:bg-blue-200 max-lg:rotate-90 max-xl:rounded-3xl my-96' width={width < 500 ? 400 : 850} height={width < 500 ? 200 : 500} data={graphicData}>
                    <Line
                        type="monotone"
                        dataKey={lineDataKey}
                        strokeWidth={1}
                        stroke="#2196F3"
                    />
                    <XAxis dataKey={xAxisDataKey} />
                    <Tooltip />
                </LineChart>
            </div>
        </motion.div>
    </>
    )
}

export default Charts