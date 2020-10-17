import React from 'react'
import { LoadingWrapperStyle, LoadingSpinStyle } from './style'

export const Loading = React.memo(() => {
  return (
    <LoadingWrapperStyle>
      <LoadingSpinStyle tip="กรุณารอสักครู่..." size="large" />
    </LoadingWrapperStyle>
  )
})
