import { Outlet, useLocation } from 'react-router-dom';
import { PageWrapper } from './style';
import Header from '../Header';
import { ContentWrapper } from '../../common/style';

const Layout = () => {
    const location = useLocation();
    return location.pathname === '/chat' ? (
        <PageWrapper>
            <Header />
            <ContentWrapper sx={{ width: '1440px', height: '93%' }}>
                <Outlet />
            </ContentWrapper>
        </PageWrapper>
    ) : (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Layout;
