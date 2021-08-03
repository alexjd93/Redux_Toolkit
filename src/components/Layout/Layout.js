import { Fragment } from 'react'
import MainHeader from './MainHeader'
import React, { useMemo } from 'react'

const Layout = (props) => {
  console.log('Layout')
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export const MemoizeLayout = React.memo(Layout)
