---
title: Customer cards
sidebar_position: 1
---

The *customer cards* section enables the grouping of information from external databases to the PBX and its display during calls. For example, when receiving a call from a specific customer, retrieve information from the database related to their invoices or any outstanding payments and evaluate whether to provide assistance or not.
To create a new customer card, follow these steps:

#### Address Book Sources

Click on `Create New Source` and complete the form that appears:

- `Database Type`: Specify the type of database from which information will be retrieved.
- `Database Name`: Specify the name of the database to connect to.
- `Database Address`: Specify the address for connecting to the database (localhost, socket, or external IP).
- `Database Port`: Specify a port for the database different from the default one proposed.
- `Database User`: Specify the user for database connection.
- `Database Password`: Specify the password for database connection.
- `Connection`: Press the "Verify" button to test the accuracy of the entered connection information.

Press `Save` to add the database source. The newly created source will be listed among the available sources.

#### Template

Templates serve as the blueprint for your customer cards. They utilize the `ejs` engine, which boasts a JavaScript-like syntax. This allows for the writing of HTML code using specific directives available on the [EJS website](https://github.com/tj/ejs).

To begin the creation process, click on the `Create New Template` button:

- `Name`: Specify the template's name.
- `Results`: This field contains the output of your query in JSON format. Use the text field to test and see how your HTML template will appear with your data.
- `Code (ejs)`: Enter your template's code in this text field, adhering to the ejs syntax and using the values mentioned above (which are essentially the result columns of your query).
- `Preview`: By combining the results and the ejs code, you will see the corresponding HTML output, which will serve as your customer card.

The PBX already offers some predefined templates with pre-written HTML code that you can duplicate and modify by altering the color.

#### Customer Cards

After creating the data source and the template for your card, this section requires you to merge the two pieces of information to ensure the card's correct creation. Click on the `Create New Card` button and fill out the form:

- `Name`: Name of the customer card.
- `Source`: Specify the previously created database source.
- `Template`: Choose the template you previously created.
- `Profile`: Select the type of user profile to which the customer card you are creating will be displayed.
- `Query`: Input the query that will return the relevant information.
- `Render`: By pressing this button, the query will execute on the specified source, and the data will be inserted into the selected template, producing the desired output.

Press the `Save` button to save your customer card.

:::warning
Once the query and card have been created and it is verified that everything works, use the `$NUMBER` variable to replace numerical parameters in your query.
:::

Example:

If your query is as follows:

```
select * from phonebook where homephone like '%150' or workphone like '%850' or cellphone like '%150' or fax like '%850'
```

It should be changed to:

```
select * from phonebook where homephone like '%$NUMBER' or workphone like '%$NUMBER' or cellphone like '%$NUMBER' or fax like '%$NUMBER'
```

The `$NUMBER` variable represents the caller ID of the PBX, referring to collect the data to be displayed on the customer card.



