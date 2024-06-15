/*
import Button from '@mui/material/Button';

function GeneralLinkCard(){

/*
            Card Name:  Basic Card Template
            Description: Has Reason paragraph
        

    return (
        <div style={{border: "1px solid black"}}>
          <h2>Go to Google Docs for App Planning</h2>
          <a href="https://docs.google.com/document/d/1YHfOfMTHxckLrYp10GOTC3uVzykLQSCbtJKRlVOhnbg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><Button variant="contained">Go to Google Docs For APP Planning Document</Button></a>
        </div>)
}


export default GeneralLinkCard;

*/

import * as React from 'react';
import { useState, useEffect } from 'react';

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

function GeneralLinkCard({ setCardData }){

    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState([]);

    useEffect(()=>{
        if(searchText.length > 3){

            fetch(`https://www.omdbapi.com/?apikey=522792c1&s=${searchText}`)
                .then(res => res.json())
                .then(res => res.Response !== 'False' ? res.Search : [])
                .then(res => setSearchData(res))
                .catch(err => console.log(err))
        }
        else{
            setSearchData([])
        }
    }, [searchText])

    return (
        <Card sx={{ margin:"20px", width: "80%" }}>
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
                            <TableRow key={result.imdbID}>
                                <TableCell >{result.Title}</TableCell>
                                <TableCell >{result.Year}</TableCell>
                                <TableCell >{result.Type}</TableCell>
                                <TableCell> 
                                    <IconButton size='small' onClick={()=> {
                                        setCardData((cardData) => [result, ...cardData])
                                        setSearchData([])
                                    }}>
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

export default GeneralLinkCard;