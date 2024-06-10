import * as React from 'react';
import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import IconButton from '@mui/material/IconButton';

import CardContent from '@mui/material/CardContent';

import AddIcon from '@mui/icons-material/Add';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { httpGet } from '../helpers/request';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

const movieSearch = (searchText) => {

    const result = JSON.parse(httpGet(`http://www.omdbapi.com/?apikey=522792c1&s=${searchText}`))
    return result.Response !== "False" ? result.Search : []

}

function SearchCard(){

    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState([]);

    React.useEffect(()=>{
        
        if(searchText.length > 3){

            setSearchData(movieSearch(searchText))

        }
        else{
            setSearchData([])
        }

    }, [searchText])


    return (
        <Card sx={{ minWidth: 275, margin:"20px" }}>
            <CardContent>
                <AddIcon />
                <Search> 
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder="Search..."
                    />  
                </Search>
                {searchData.length > 0 && <Table>
                    <TableBody>
                        {searchData.map((result) => (
                            <TableRow key={result.Title}>
                                <TableCell >{result.Title}</TableCell>
                                <TableCell >{result.Year}</TableCell>
                                <TableCell >{result.Type}</TableCell>
                                <TableCell> 
                                    <IconButton size='small'>
                                        <LibraryAddIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>}
            </CardContent>
        </Card>
        
    )
}

export default SearchCard;