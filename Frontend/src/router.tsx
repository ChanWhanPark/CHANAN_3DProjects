import { Routes, Route, Navigate } from 'react-router-dom';

import { MainCanvas } from './components/MainCanvas'
import { Test } from './components/Test'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main"/>}/>
      <Route path="/main" element={<MainCanvas/>}/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  )
}