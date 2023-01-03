import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { StyledPage } from './styled';
import { Container } from './components/Container/Container';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#fff",
    },
    secondary: {
      main: '#b8bbc1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          color: "#fff",
          fontSize: "14px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: '25px',
          padding: '10px',
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '25px',
        }
      }
    }
  },
});

export const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <StyledPage>
        <Container />
      </StyledPage>
    </ThemeProvider>
  </StyledEngineProvider>
);
