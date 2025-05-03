import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Kyc = () => {


    return (
        <div class="uni-body pages-user-kycSubmit">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/kycSubmit">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-d420a500="" class="page">
                                <uni-view data-v-d420a500="" class="ellipse"></uni-view>
                                <uni-view data-v-d420a500="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-d420a500="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <Link to="/NodeDetails">
                                            <uni-view data-v-d420a500="" class="back"><img data-v-d420a500="" src="/static/img/back.png" alt="" style={{width: '35px'}} /></uni-view>
                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <uni-view data-v-d420a500="" class="page-title">KYC</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-d420a500="" class="content">
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Name</uni-view>
                                        <uni-view data-v-30449abe="" data-v-d420a500="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                            <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>

                                                <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                                    <div class="uni-input-wrapper">
                                                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-d420a500="">Please enter your name</div>
                                                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
                                                    </div>
                                                </uni-input>

                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Date of birth</uni-view>
                                        <uni-view data-v-5434dfc4="" data-v-d420a500="" class="uni-date">
                                            <uni-view data-v-5434dfc4="" class="uni-date-editor">
                                                <uni-view data-v-5434dfc4="" class="uni-date-editor--x uni-date-x--border">
                                                    <uni-view data-v-5434dfc4="" class="uni-date-x uni-date-single">
                                                        <uni-text data-v-45a6b600="" data-v-5434dfc4="" class="uni-icons icon-calendar uniui-calendar" style={{color: 'rgb(192, 196, 204)', fontSize: '22px'}}><span></span></uni-text>
                                                        <uni-view data-v-5434dfc4="" class="uni-date__x-input">Please select your date of birth</uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>
                                            <uni-view data-v-5434dfc4="" class="uni-date-mask--pc" style={{display: 'none'}}></uni-view>
                                            <uni-view data-v-5434dfc4="" class="uni-date-picker__container" style={{display: 'none'}}>
                                                <uni-view data-v-5434dfc4="" class="uni-date-single--x">
                                                    <uni-view data-v-5434dfc4="" class="uni-popper__arrow"></uni-view>

                                                    <uni-view data-v-41132804="" data-v-5434dfc4="" class="uni-calendar" style={{padding: '0px 8px'}}>

                                                        <uni-view data-v-41132804="" class="uni-calendar__content">
                                                            <uni-view data-v-41132804="" class="uni-calendar__header">
                                                                <uni-view data-v-41132804="" class="uni-calendar__header-btn-box">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__header-btn uni-calendar--left"></uni-view>
                                                                </uni-view>
                                                                <uni-picker data-v-41132804="">
                                                                    <div class="uni-picker-container uni-date-select">
                                                                        <div class="uni-mask uni-picker-mask" style={{display: 'none'}}></div>
                                                                        <div class="uni-picker-custom">
                                                                            <div class="uni-picker-header">
                                                                                <div class="uni-picker-action uni-picker-action-cancel"> Cancel </div>
                                                                                <div class="uni-picker-action uni-picker-action-confirm"> Done </div>
                                                                            </div>

                                                                            <div class="uni-picker-select">
                                                                                <div class="uni-picker-item"> 1875 </div>
                                                                                <div class="uni-picker-item"> 1876 </div>
                                                                                <div class="uni-picker-item"> 1877 </div>
                                                                                <div class="uni-picker-item"> 1878 </div>
                                                                                <div class="uni-picker-item"> 1879 </div>
                                                                                <div class="uni-picker-item"> 1880 </div>
                                                                                <div class="uni-picker-item"> 1881 </div>
                                                                                <div class="uni-picker-item"> 1882 </div>
                                                                                <div class="uni-picker-item"> 1883 </div>
                                                                                <div class="uni-picker-item"> 1884 </div>
                                                                                <div class="uni-picker-item"> 1885 </div>
                                                                                <div class="uni-picker-item"> 1886 </div>
                                                                                <div class="uni-picker-item"> 1887 </div>
                                                                                <div class="uni-picker-item"> 1888 </div>
                                                                                <div class="uni-picker-item"> 1889 </div>
                                                                                <div class="uni-picker-item"> 1890 </div>
                                                                                <div class="uni-picker-item"> 1891 </div>
                                                                                <div class="uni-picker-item"> 1892 </div>
                                                                                <div class="uni-picker-item"> 1893 </div>
                                                                                <div class="uni-picker-item"> 1894 </div>
                                                                                <div class="uni-picker-item"> 1895 </div>
                                                                                <div class="uni-picker-item"> 1896 </div>
                                                                                <div class="uni-picker-item"> 1897 </div>
                                                                                <div class="uni-picker-item"> 1898 </div>
                                                                                <div class="uni-picker-item"> 1899 </div>
                                                                                <div class="uni-picker-item"> 1900 </div>
                                                                                <div class="uni-picker-item"> 1901 </div>
                                                                                <div class="uni-picker-item"> 1902 </div>
                                                                                <div class="uni-picker-item"> 1903 </div>
                                                                                <div class="uni-picker-item"> 1904 </div>
                                                                                <div class="uni-picker-item"> 1905 </div>
                                                                                <div class="uni-picker-item"> 1906 </div>
                                                                                <div class="uni-picker-item"> 1907 </div>
                                                                                <div class="uni-picker-item"> 1908 </div>
                                                                                <div class="uni-picker-item"> 1909 </div>
                                                                                <div class="uni-picker-item"> 1910 </div>
                                                                                <div class="uni-picker-item"> 1911 </div>
                                                                                <div class="uni-picker-item"> 1912 </div>
                                                                                <div class="uni-picker-item"> 1913 </div>
                                                                                <div class="uni-picker-item"> 1914 </div>
                                                                                <div class="uni-picker-item"> 1915 </div>
                                                                                <div class="uni-picker-item"> 1916 </div>
                                                                                <div class="uni-picker-item"> 1917 </div>
                                                                                <div class="uni-picker-item"> 1918 </div>
                                                                                <div class="uni-picker-item"> 1919 </div>
                                                                                <div class="uni-picker-item"> 1920 </div>
                                                                                <div class="uni-picker-item"> 1921 </div>
                                                                                <div class="uni-picker-item"> 1922 </div>
                                                                                <div class="uni-picker-item"> 1923 </div>
                                                                                <div class="uni-picker-item"> 1924 </div>
                                                                                <div class="uni-picker-item"> 1925 </div>
                                                                                <div class="uni-picker-item"> 1926 </div>
                                                                                <div class="uni-picker-item"> 1927 </div>
                                                                                <div class="uni-picker-item"> 1928 </div>
                                                                                <div class="uni-picker-item"> 1929 </div>
                                                                                <div class="uni-picker-item"> 1930 </div>
                                                                                <div class="uni-picker-item"> 1931 </div>
                                                                                <div class="uni-picker-item"> 1932 </div>
                                                                                <div class="uni-picker-item"> 1933 </div>
                                                                                <div class="uni-picker-item"> 1934 </div>
                                                                                <div class="uni-picker-item"> 1935 </div>
                                                                                <div class="uni-picker-item"> 1936 </div>
                                                                                <div class="uni-picker-item"> 1937 </div>
                                                                                <div class="uni-picker-item"> 1938 </div>
                                                                                <div class="uni-picker-item"> 1939 </div>
                                                                                <div class="uni-picker-item"> 1940 </div>
                                                                                <div class="uni-picker-item"> 1941 </div>
                                                                                <div class="uni-picker-item"> 1942 </div>
                                                                                <div class="uni-picker-item"> 1943 </div>
                                                                                <div class="uni-picker-item"> 1944 </div>
                                                                                <div class="uni-picker-item"> 1945 </div>
                                                                                <div class="uni-picker-item"> 1946 </div>
                                                                                <div class="uni-picker-item"> 1947 </div>
                                                                                <div class="uni-picker-item"> 1948 </div>
                                                                                <div class="uni-picker-item"> 1949 </div>
                                                                                <div class="uni-picker-item"> 1950 </div>
                                                                                <div class="uni-picker-item"> 1951 </div>
                                                                                <div class="uni-picker-item"> 1952 </div>
                                                                                <div class="uni-picker-item"> 1953 </div>
                                                                                <div class="uni-picker-item"> 1954 </div>
                                                                                <div class="uni-picker-item"> 1955 </div>
                                                                                <div class="uni-picker-item"> 1956 </div>
                                                                                <div class="uni-picker-item"> 1957 </div>
                                                                                <div class="uni-picker-item"> 1958 </div>
                                                                                <div class="uni-picker-item"> 1959 </div>
                                                                                <div class="uni-picker-item"> 1960 </div>
                                                                                <div class="uni-picker-item"> 1961 </div>
                                                                                <div class="uni-picker-item"> 1962 </div>
                                                                                <div class="uni-picker-item"> 1963 </div>
                                                                                <div class="uni-picker-item"> 1964 </div>
                                                                                <div class="uni-picker-item"> 1965 </div>
                                                                                <div class="uni-picker-item"> 1966 </div>
                                                                                <div class="uni-picker-item"> 1967 </div>
                                                                                <div class="uni-picker-item"> 1968 </div>
                                                                                <div class="uni-picker-item"> 1969 </div>
                                                                                <div class="uni-picker-item"> 1970 </div>
                                                                                <div class="uni-picker-item"> 1971 </div>
                                                                                <div class="uni-picker-item"> 1972 </div>
                                                                                <div class="uni-picker-item"> 1973 </div>
                                                                                <div class="uni-picker-item"> 1974 </div>
                                                                                <div class="uni-picker-item"> 1975 </div>
                                                                                <div class="uni-picker-item"> 1976 </div>
                                                                                <div class="uni-picker-item"> 1977 </div>
                                                                                <div class="uni-picker-item"> 1978 </div>
                                                                                <div class="uni-picker-item"> 1979 </div>
                                                                                <div class="uni-picker-item"> 1980 </div>
                                                                                <div class="uni-picker-item"> 1981 </div>
                                                                                <div class="uni-picker-item"> 1982 </div>
                                                                                <div class="uni-picker-item"> 1983 </div>
                                                                                <div class="uni-picker-item"> 1984 </div>
                                                                                <div class="uni-picker-item"> 1985 </div>
                                                                                <div class="uni-picker-item"> 1986 </div>
                                                                                <div class="uni-picker-item"> 1987 </div>
                                                                                <div class="uni-picker-item"> 1988 </div>
                                                                                <div class="uni-picker-item"> 1989 </div>
                                                                                <div class="uni-picker-item"> 1990 </div>
                                                                                <div class="uni-picker-item"> 1991 </div>
                                                                                <div class="uni-picker-item"> 1992 </div>
                                                                                <div class="uni-picker-item"> 1993 </div>
                                                                                <div class="uni-picker-item"> 1994 </div>
                                                                                <div class="uni-picker-item"> 1995 </div>
                                                                                <div class="uni-picker-item"> 1996 </div>
                                                                                <div class="uni-picker-item"> 1997 </div>
                                                                                <div class="uni-picker-item"> 1998 </div>
                                                                                <div class="uni-picker-item"> 1999 </div>
                                                                                <div class="uni-picker-item"> 2000 </div>
                                                                                <div class="uni-picker-item"> 2001 </div>
                                                                                <div class="uni-picker-item"> 2002 </div>
                                                                                <div class="uni-picker-item"> 2003 </div>
                                                                                <div class="uni-picker-item"> 2004 </div>
                                                                                <div class="uni-picker-item"> 2005 </div>
                                                                                <div class="uni-picker-item"> 2006 </div>
                                                                                <div class="uni-picker-item"> 2007 </div>
                                                                                <div class="uni-picker-item"> 2008 </div>
                                                                                <div class="uni-picker-item"> 2009 </div>
                                                                                <div class="uni-picker-item"> 2010 </div>
                                                                                <div class="uni-picker-item"> 2011 </div>
                                                                                <div class="uni-picker-item"> 2012 </div>
                                                                                <div class="uni-picker-item"> 2013 </div>
                                                                                <div class="uni-picker-item"> 2014 </div>
                                                                                <div class="uni-picker-item"> 2015 </div>
                                                                                <div class="uni-picker-item"> 2016 </div>
                                                                                <div class="uni-picker-item"> 2017 </div>
                                                                                <div class="uni-picker-item"> 2018 </div>
                                                                                <div class="uni-picker-item"> 2019 </div>
                                                                                <div class="uni-picker-item"> 2020 </div>
                                                                                <div class="uni-picker-item"> 2021 </div>
                                                                                <div class="uni-picker-item"> 2022 </div>
                                                                                <div class="uni-picker-item"> 2023 </div>
                                                                                <div class="uni-picker-item"> 2024 </div>
                                                                                <div class="uni-picker-item selected"> 2025 </div>
                                                                                <div class="uni-picker-item"> 2026 </div>
                                                                                <div class="uni-picker-item"> 2027 </div>
                                                                                <div class="uni-picker-item"> 2028 </div>
                                                                                <div class="uni-picker-item"> 2029 </div>
                                                                                <div class="uni-picker-item"> 2030 </div>
                                                                                <div class="uni-picker-item"> 2031 </div>
                                                                                <div class="uni-picker-item"> 2032 </div>
                                                                                <div class="uni-picker-item"> 2033 </div>
                                                                                <div class="uni-picker-item"> 2034 </div>
                                                                                <div class="uni-picker-item"> 2035 </div>
                                                                                <div class="uni-picker-item"> 2036 </div>
                                                                                <div class="uni-picker-item"> 2037 </div>
                                                                                <div class="uni-picker-item"> 2038 </div>
                                                                                <div class="uni-picker-item"> 2039 </div>
                                                                                <div class="uni-picker-item"> 2040 </div>
                                                                                <div class="uni-picker-item"> 2041 </div>
                                                                                <div class="uni-picker-item"> 2042 </div>
                                                                                <div class="uni-picker-item"> 2043 </div>
                                                                                <div class="uni-picker-item"> 2044 </div>
                                                                                <div class="uni-picker-item"> 2045 </div>
                                                                                <div class="uni-picker-item"> 2046 </div>
                                                                                <div class="uni-picker-item"> 2047 </div>
                                                                                <div class="uni-picker-item"> 2048 </div>
                                                                                <div class="uni-picker-item"> 2049 </div>
                                                                                <div class="uni-picker-item"> 2050 </div>
                                                                                <div class="uni-picker-item"> 2051 </div>
                                                                                <div class="uni-picker-item"> 2052 </div>
                                                                                <div class="uni-picker-item"> 2053 </div>
                                                                                <div class="uni-picker-item"> 2054 </div>
                                                                                <div class="uni-picker-item"> 2055 </div>
                                                                                <div class="uni-picker-item"> 2056 </div>
                                                                                <div class="uni-picker-item"> 2057 </div>
                                                                                <div class="uni-picker-item"> 2058 </div>
                                                                                <div class="uni-picker-item"> 2059 </div>
                                                                                <div class="uni-picker-item"> 2060 </div>
                                                                                <div class="uni-picker-item"> 2061 </div>
                                                                                <div class="uni-picker-item"> 2062 </div>
                                                                                <div class="uni-picker-item"> 2063 </div>
                                                                                <div class="uni-picker-item"> 2064 </div>
                                                                                <div class="uni-picker-item"> 2065 </div>
                                                                                <div class="uni-picker-item"> 2066 </div>
                                                                                <div class="uni-picker-item"> 2067 </div>
                                                                                <div class="uni-picker-item"> 2068 </div>
                                                                                <div class="uni-picker-item"> 2069 </div>
                                                                                <div class="uni-picker-item"> 2070 </div>
                                                                                <div class="uni-picker-item"> 2071 </div>
                                                                                <div class="uni-picker-item"> 2072 </div>
                                                                                <div class="uni-picker-item"> 2073 </div>
                                                                                <div class="uni-picker-item"> 2074 </div>
                                                                                <div class="uni-picker-item"> 2075 </div>
                                                                                <div class="uni-picker-item"> 2076 </div>
                                                                                <div class="uni-picker-item"> 2077 </div>
                                                                                <div class="uni-picker-item"> 2078 </div>
                                                                                <div class="uni-picker-item"> 2079 </div>
                                                                                <div class="uni-picker-item"> 2080 </div>
                                                                                <div class="uni-picker-item"> 2081 </div>
                                                                                <div class="uni-picker-item"> 2082 </div>
                                                                                <div class="uni-picker-item"> 2083 </div>
                                                                                <div class="uni-picker-item"> 2084 </div>
                                                                                <div class="uni-picker-item"> 2085 </div>
                                                                                <div class="uni-picker-item"> 2086 </div>
                                                                                <div class="uni-picker-item"> 2087 </div>
                                                                                <div class="uni-picker-item"> 2088 </div>
                                                                                <div class="uni-picker-item"> 2089 </div>
                                                                                <div class="uni-picker-item"> 2090 </div>
                                                                                <div class="uni-picker-item"> 2091 </div>
                                                                                <div class="uni-picker-item"> 2092 </div>
                                                                                <div class="uni-picker-item"> 2093 </div>
                                                                                <div class="uni-picker-item"> 2094 </div>
                                                                                <div class="uni-picker-item"> 2095 </div>
                                                                                <div class="uni-picker-item"> 2096 </div>
                                                                                <div class="uni-picker-item"> 2097 </div>
                                                                                <div class="uni-picker-item"> 2098 </div>
                                                                                <div class="uni-picker-item"> 2099 </div>
                                                                                <div class="uni-picker-item"> 2100 </div>
                                                                                <div class="uni-picker-item"> 2101 </div>
                                                                                <div class="uni-picker-item"> 2102 </div>
                                                                                <div class="uni-picker-item"> 2103 </div>
                                                                                <div class="uni-picker-item"> 2104 </div>
                                                                                <div class="uni-picker-item"> 2105 </div>
                                                                                <div class="uni-picker-item"> 2106 </div>
                                                                                <div class="uni-picker-item"> 2107 </div>
                                                                                <div class="uni-picker-item"> 2108 </div>
                                                                                <div class="uni-picker-item"> 2109 </div>
                                                                                <div class="uni-picker-item"> 2110 </div>
                                                                                <div class="uni-picker-item"> 2111 </div>
                                                                                <div class="uni-picker-item"> 2112 </div>
                                                                                <div class="uni-picker-item"> 2113 </div>
                                                                                <div class="uni-picker-item"> 2114 </div>
                                                                                <div class="uni-picker-item"> 2115 </div>
                                                                                <div class="uni-picker-item"> 2116 </div>
                                                                                <div class="uni-picker-item"> 2117 </div>
                                                                                <div class="uni-picker-item"> 2118 </div>
                                                                                <div class="uni-picker-item"> 2119 </div>
                                                                                <div class="uni-picker-item"> 2120 </div>
                                                                                <div class="uni-picker-item"> 2121 </div>
                                                                                <div class="uni-picker-item"> 2122 </div>
                                                                                <div class="uni-picker-item"> 2123 </div>
                                                                                <div class="uni-picker-item"> 2124 </div>
                                                                                <div class="uni-picker-item"> 2125 </div>
                                                                                <div class="uni-picker-item"> 2126 </div>
                                                                                <div class="uni-picker-item"> 2127 </div>
                                                                                <div class="uni-picker-item"> 2128 </div>
                                                                                <div class="uni-picker-item"> 2129 </div>
                                                                                <div class="uni-picker-item"> 2130 </div>
                                                                                <div class="uni-picker-item"> 2131 </div>
                                                                                <div class="uni-picker-item"> 2132 </div>
                                                                                <div class="uni-picker-item"> 2133 </div>
                                                                                <div class="uni-picker-item"> 2134 </div>
                                                                                <div class="uni-picker-item"> 2135 </div>
                                                                                <div class="uni-picker-item"> 2136 </div>
                                                                                <div class="uni-picker-item"> 2137 </div>
                                                                                <div class="uni-picker-item"> 2138 </div>
                                                                                <div class="uni-picker-item"> 2139 </div>
                                                                                <div class="uni-picker-item"> 2140 </div>
                                                                                <div class="uni-picker-item"> 2141 </div>
                                                                                <div class="uni-picker-item"> 2142 </div>
                                                                                <div class="uni-picker-item"> 2143 </div>
                                                                                <div class="uni-picker-item"> 2144 </div>
                                                                                <div class="uni-picker-item"> 2145 </div>
                                                                                <div class="uni-picker-item"> 2146 </div>
                                                                                <div class="uni-picker-item"> 2147 </div>
                                                                                <div class="uni-picker-item"> 2148 </div>
                                                                                <div class="uni-picker-item"> 2149 </div>
                                                                                <div class="uni-picker-item"> 2150 </div>
                                                                                <div class="uni-picker-item"> 2151 </div>
                                                                                <div class="uni-picker-item"> 2152 </div>
                                                                                <div class="uni-picker-item"> 2153 </div>
                                                                                <div class="uni-picker-item"> 2154 </div>
                                                                                <div class="uni-picker-item"> 2155 </div>
                                                                                <div class="uni-picker-item"> 2156 </div>
                                                                                <div class="uni-picker-item"> 2157 </div>
                                                                                <div class="uni-picker-item"> 2158 </div>
                                                                                <div class="uni-picker-item"> 2159 </div>
                                                                                <div class="uni-picker-item"> 2160 </div>
                                                                                <div class="uni-picker-item"> 2161 </div>
                                                                                <div class="uni-picker-item"> 2162 </div>
                                                                                <div class="uni-picker-item"> 2163 </div>
                                                                                <div class="uni-picker-item"> 2164 </div>
                                                                                <div class="uni-picker-item"> 2165 </div>
                                                                                <div class="uni-picker-item"> 2166 </div>
                                                                                <div class="uni-picker-item"> 2167 </div>
                                                                                <div class="uni-picker-item"> 2168 </div>
                                                                                <div class="uni-picker-item"> 2169 </div>
                                                                                <div class="uni-picker-item"> 2170 </div>
                                                                                <div class="uni-picker-item"> 2171 </div>
                                                                                <div class="uni-picker-item"> 2172 </div>
                                                                                <div class="uni-picker-item"> 2173 </div>
                                                                                <div class="uni-picker-item"> 2174 </div>
                                                                                <div class="uni-picker-item"> 2175 </div>
                                                                            </div>
                                                                            <div></div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <uni-text data-v-41132804="" class="uni-calendar__header-text"><span>2025-05</span></uni-text>
                                                                    </div>

                                                                </uni-picker>
                                                                <uni-view data-v-41132804="" class="uni-calendar__header-btn-box">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__header-btn uni-calendar--right"></uni-view>
                                                                </uni-view>

                                                            </uni-view>
                                                            <uni-view data-v-41132804="" class="uni-calendar__box">

                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks" style={{paddingBottom: '7px'}}>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>SUN</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>MON</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>TUE</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>WED</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>THU</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>FRI</span></uni-text>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-day">
                                                                        <uni-text data-v-41132804="" class="uni-calendar__weeks-day-text"><span>SAT</span></uni-text>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>27</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>28</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>29</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>30</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>1</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>2</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>3</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item--today"></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>4</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>5</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>6</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>7</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>8</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>9</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>10</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>11</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>12</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>13</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>14</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>15</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>16</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>17</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>18</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>19</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>20</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>21</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>22</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>23</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>24</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>25</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>26</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>27</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>28</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>29</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>30</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>31</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                                <uni-view data-v-41132804="" class="uni-calendar__weeks">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>1</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>2</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>3</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>4</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>5</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>6</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                    <uni-view data-v-41132804="" class="uni-calendar__weeks-item">
                                                                        <uni-view data-v-53b68fae="" data-v-41132804="" class="uni-calendar-item__weeks-box uni-calendar-item--hook uni-calendar-item--disable">
                                                                            <uni-view data-v-53b68fae="" class="uni-calendar-item__weeks-box-item uni-calendar-item--disable">

                                                                                <uni-text data-v-53b68fae="" class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"><span>7</span></uni-text>
                                                                            </uni-view>
                                                                            <uni-view data-v-53b68fae="" class=""></uni-view>
                                                                        </uni-view>
                                                                    </uni-view>
                                                                </uni-view>
                                                            </uni-view>

                                                        </uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Type</uni-view>
                                        <uni-view data-v-7442d4f6="" data-v-d420a500="" class="uni-stat__select">

                                            <uni-view data-v-7442d4f6="" class="uni-stat-box">
                                                <uni-view data-v-7442d4f6="" class="uni-select">
                                                    <uni-view data-v-7442d4f6="" class="uni-select__input-box">
                                                        <uni-view data-v-7442d4f6="" class="uni-select__input-text uni-select__input-placeholder">Please select a type</uni-view>
                                                        <uni-view data-v-7442d4f6="">
                                                            <uni-text data-v-45a6b600="" data-v-7442d4f6="" class="uni-icons uniui-bottom" style={{color: 'rgb(153, 153, 153)', fontSize: '14px'}}><span></span></uni-text>
                                                        </uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Number</uni-view>
                                        <uni-view data-v-30449abe="" data-v-d420a500="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                            <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>

                                                <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                                    <div class="uni-input-wrapper">
                                                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-d420a500="">Please Enter Document Number</div>
                                                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
                                                    </div>
                                                </uni-input>

                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Photo</uni-view>
                                        <uni-view data-v-d420a500="" class="photo-box">
                                            <uni-view data-v-d420a500="" class="photo-bg">
                                                <div data-v-c28d8bce="" data-v-d420a500="">
                                                    <uni-view data-v-c28d8bce="" class="Rboy-box">
                                                        <uni-view data-v-c28d8bce="" class="Rboy-obverse">
                                                            <uni-image data-v-c28d8bce="" class="obverseimg">
                                                                <div style={{backgroundImage: 'url(&quot;./static/img/man.png&quot;)', backgroundPosition: '0% 0%', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}></div>
                                                                <img src="/static/img/man.png" draggable="false" />
                                                            </uni-image>

                                                        </uni-view>
                                                    </uni-view>
                                                </div>
                                            </uni-view>
                                        </uni-view>
                                        <uni-view data-v-d420a500="" class="tips">Please make sure the photo is clear</uni-view>
                                    </uni-view>
                                    <uni-view data-v-34a1f189="" class="submit">Submit</uni-view>
                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default Kyc;






















