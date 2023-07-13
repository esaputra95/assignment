import React, { memo, useState, useMemo } from 'react'
import { mahasiswaDumy } from './dataDumy'

type mahasiswaType = {
	key: number;
	name: string;
}
type penilaianTpe = {
	key: string;
	name: string;
}

type formType = {
	mahasiswa: mahasiswaType[];
	penilaian: penilaianTpe

}
type outputType = {
	aspek_penilaian_1: any;
	aspek_penilaian_2: any;
	aspek_penilaian_3: any;
	aspek_penilaian_4: any;
}

type PenilaianType = {
	index:number;
	value:number;
}

const App = () => {
	const [penilaian1, setpenilaian1] = useState<PenilaianType[]>([{index:0, value:0}]);
	const [penilaian2, setpenilaian2] = useState<PenilaianType[]>([{index:0, value:0}]);
	const [penilaian3, setpenilaian3] = useState<PenilaianType[]>([{index:0, value:0}]);
	const [penilaian4, setpenilaian4] = useState<PenilaianType[]>([{index:0, value:0}]);
	const [output, setOutput] = useState<outputType>()

	const onChangepenilaian1 = useMemo(() => (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
		const newpenilaian1 = [...penilaian1];
		newpenilaian1[index] = {
			index: index, 
			value: parseInt(event.target.value)};
		setpenilaian1(newpenilaian1);
	},[penilaian1] );

	const onChangepenilaian2 = useMemo(() => (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
		const newpenilaian2 = [...penilaian2];
		newpenilaian2[index] = { 
			index: index, 
			value: parseInt(event.target.value)
		};
		setpenilaian2(newpenilaian2);
	},[penilaian2] );

	const onChangepenilaian3 = useMemo(() => (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
		const newpenilaian3 = [...penilaian3];
		newpenilaian3[index] = {
			index: index, 
			value: parseInt(event.target.value)
		};
		setpenilaian3(newpenilaian3);
	},[penilaian3] );

	const onChangepenilaian4 = useMemo(() => (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
		const newpenilaian4 = [...penilaian4];
		newpenilaian4[index] = {
			index: index, 
			value: parseInt(event.target.value)
		};
		setpenilaian4(newpenilaian4);
	},[penilaian4] );

	const handleOnSave = () => {
		try {
			let nilaiAkhirPenilaian1: { [key: string]: number } = {};
			for (let index = 0; index < penilaian1.length; index++) {
				if(!penilaian1[index] || !penilaian1[index].value) continue
				const key = mahasiswaDumy[penilaian1[index].index].name;
				nilaiAkhirPenilaian1 = {
					...nilaiAkhirPenilaian1,
					[key]: penilaian1[index].value,
				};
			}
			let nilaiAkhirPenilaian2: { [key: string]: number } = {};
			for (let index = 0; index < penilaian2.length; index++) {
				if(!penilaian2[index] || !penilaian2[index].value) continue
				const key = mahasiswaDumy[penilaian2[index].index].name;
				nilaiAkhirPenilaian2 = {
					...nilaiAkhirPenilaian2,
					[key]: penilaian2[index].value,
				};
			}
			let nilaiAkhirPenilaian3: { [key: string]: number } = {};
			for (let index = 0; index < penilaian3.length; index++) {
				if(!penilaian3[index] || !penilaian3[index].value) continue
				const key = mahasiswaDumy[penilaian3[index].index].name;
				nilaiAkhirPenilaian3 = {
					...nilaiAkhirPenilaian3,
					[key]: penilaian3[index].value,
				};
			}
			let nilaiAkhirPenilaian4: { [key: string]: number } = {};
			for (let index = 0; index < penilaian4.length; index++) {
				if(!penilaian4[index] || !penilaian4[index].value) continue
				const key = mahasiswaDumy[penilaian4[index].index].name;
				nilaiAkhirPenilaian4 = {
					...nilaiAkhirPenilaian4,
					[key]: penilaian4[index].value,
				};
			}
			const dataFinal = {
				aspek_penilaian_1: {...nilaiAkhirPenilaian1},
				aspek_penilaian_2: {...nilaiAkhirPenilaian2},
				aspek_penilaian_3: {...nilaiAkhirPenilaian3},
				aspek_penilaian_4: {...nilaiAkhirPenilaian4},
			}
			console.log({dataFinal});
			
			setOutput(dataFinal)
			
		} catch (error) {
			alert(error)
		}
	};

	return (
		<div className='w-full flex justify-center bg-slate-200'>
			<div className='w-10/12 bg-white h-screen flex flex-col p-4'>
				<div>
					<label className='text-2xl font-medium'>Assigment Mahasiswa</label>
				</div>
				<div className='w-full flex'>
					<div className='w-4/12 border-b-2 mb-1'>Nama</div>
					<div className='w-8/12 border-b-2 mb-1'>Ini label</div>
				</div>
				<div className='flex'>
					<div className='flex flex-col w-4/12 h-10'>
						{mahasiswaDumy.map((value) => (
							<div className='flex border-b-2 h-14' key={value.key}>
								<label className='3/12 h-10'>{value.name}</label>
							</div>
						))}
					</div>
					<div className='flex flex-col w-2/12'>
						{mahasiswaDumy.map((value, index) => (
							<PenilaianComponent 
								key={value.key} 
								index={index} 
								onChange={onChangepenilaian1}
							/>
						))}
					</div>
					<div className='flex flex-col  w-2/12'>
						{mahasiswaDumy.map((value, index) => (
							<PenilaianComponent 
								key={value.key} 
								index={index} 
								onChange={onChangepenilaian2}
							/>
						))}
					</div>
					<div className='flex flex-col w-2/12'>
						{mahasiswaDumy.map((value, index) => (
							<PenilaianComponent
								key={value.key}
								index={index} 
								onChange={onChangepenilaian3}
							/>
						))}
					</div>
					<div className='flex flex-col w-2/12'>
						{mahasiswaDumy.map((value, index) => (
							<PenilaianComponent
								key={value.key} 
								index={index} 
								onChange={onChangepenilaian4}
							/>
						))}
					</div>
				</div>
				<div className='w-full flex justify-end'>
					<button className='w-2/12 bg-slate-800 text-slate-200 p-2 rounded-md my-4' onClick={handleOnSave}>Simpan</button>
				</div>
				<div className='w-full bg-green-400'>
					{
						JSON.stringify(output)
					}
				</div>
			</div>
		</div>
	);
};

interface PenilaianComponentProps {
	index: number;
	onChange: (index:number, event:React.ChangeEvent<HTMLSelectElement>) => void;
}

const PenilaianComponent: React.FC<PenilaianComponentProps> = React.memo(
	({ index, onChange }) => {
		return (
			<div className='border-b-2 w-full'>
				<select className=' bg-gray-50 border border-gray-300 h-10 w-full rounded-md' name='select1' onChange={(event) => onChange(index, event)}>
					<option>-</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='7'>7</option>
					<option value='8'>8</option>
					<option value='9'>9</option>
					<option value='10'>10</option>
				</select>
			</div>
		);
	}
);
export default App;