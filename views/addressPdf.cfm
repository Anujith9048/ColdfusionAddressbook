
    <cfhtmltopdf destination="#ExpandPath('../assets/pdf/address.pdf')#" overwrite="true">
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        font-size: 16px;
                        text-align: left;
                        border-radius: 10px;
                        box-shadow: 1px 1px 2px solid black;
                    }
                    th, td {
                        padding: 12px;
                        border: 1px solid #ddd;
                    }
                    th {
                        background-color: #f2f2f2;
                        font-weight: bold;
                        color: #333;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    img {
                        border-radius: 50%;
                        width: 40px;
                    }
                </style>
            </head>
            <cfoutput>
            <body>
                <h2 class="text-center">Address List</h2>
                <table class="table align-content-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <cfset criteria={userId=session.userId}>
                        <cfset savedAddresses=entityLoad("savedAddress", criteria)>
                        <cfloop array="#savedAddresses#" index="address">
                            <tr>
                                <td class="align-content-center">
                                    <img src="../assets/#address.getImage()#" alt="Address Image">
                                </td>
                                <td class="align-content-center">#address.getFname()#</td>
                                <td class="align-content-center">#address.getEmail()#</td>
                                <td class="align-content-center">#address.getPhone()#</td>
                            </tr>
                        </cfloop>
                    </tbody>
                </table>
            </body>
        </cfoutput>
        </html>
    </cfhtmltopdf>
<cfoutput>
    <cfheader name="Content-Disposition" value="attachment; filename=address.pdf">
    <cfcontent file="#ExpandPath('../assets/pdf/address.pdf')#" type="application/pdf">
    <cfabort>

</cfoutput>
