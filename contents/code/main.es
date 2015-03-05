/***************************************************************************
 *   Copyright (C) 2009 Keith Z-G <keithzg@gmail.com>                      *
 *   Copyright (C) 2008 Matthias Fuchs <mat69@gmx.net>                     *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA .        *
 ***************************************************************************/

function init()
{
    comic.comicAuthor = "Paul Gilligan";
    comic.firstIdentifier = "2003-04-27";
    comic.shopUrl = "http://poochcafe.com/?page_id=13";
    comic.websiteUrl = "http://images.ucomics.com/comics/poc/" + comic.identifier.toString( "yyyy/MM/dd/" );

    var fileName = "poc" + comic.identifier.toString( "yyMMdd" ) + ".gif";
    var url = "http://images.ucomics.com/comics/poc/" + comic.identifier.toString( "yyyy/" ) + fileName;

    comic.requestPage( url, comic.Image );
}
