import React, { FC } from 'react'
import Head from '../../components/head/Head'
import PageHeader from '../../components/page-header/PageHeader'
import PageFooter from '../../components/page-footer/PageFooter'
import PageBody from '../../components/page-body/PageBody'
import Theme from '../../theme/theme'
import { Grommet, Box } from 'grommet'

const TemplateName: FC = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Grommet theme={Theme} full>
        <Box className="page-container" fill>
          <PageHeader />
          <PageBody>{children}</PageBody>
          <PageFooter />
        </Box>
      </Grommet>
    </React.Fragment>
  )
}

export default TemplateName
