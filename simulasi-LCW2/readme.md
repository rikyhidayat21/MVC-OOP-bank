# World Bank
Aplikasi yang menampilkan daftar `Bank` yang memiliki beberapa `Customer`.

## Release 0
Buatlah class `Bank` yang memiliki property:
- id = id dari sebuah `Bank`
- name = nama dari sebuah `Bank`
- type = jenis dari sebuah `Bank`
- limit = limit banyaknya `Customer` dari sebuah `Bank`
- customers = kumpulan instance `Customer`

Terdapat 2 jenis `Bank`:
- `LocalBank` = memiliki limit 3 `Customer`
- `NationalBank` = memiliki limit 5 `Customer`

Buatlah class `Customer` memiliki property:
- name = nama dari seorang `Customer`
- ktp = ktp dari seorang `Customer`
- depositAmount = jumlah uang dari seorang `Customer`

## Release 1
Buatlah fitur yang dapat menampilkan seluruh `Bank` beserta `Customer` berdasarkan data dari `data.json`
```
node index.js list
```
<img src="assets/list.png">

## Release 2
Buatlah fitur yang dapat menambahkan `Bank` ke `data.json`. Buatlah id `Bank` auto-increment
```
node index.js addBank <name> <type>
```
```
node index.js addBank "Bank Mandiri" NationalBank
```
<img src="assets/addBank.png">

## Release 3
Buatlah fitur yang dapat menghapus `Bank` dari `data.json` berdasarkan id
```
node index.js deleteBank <id>
```
```
node index.js deleteBank 3
```
<img src="assets/deleteBank.png">

## Release 4
Buatlah fitur yang dapat menambahkan `Customer` ke sebuah `Bank` dan disimpan ke `data.json`
```
node index.js addCustomer <idBank> <name> <ktp> <depositAmount>
```
```
node index.js addCustomer 1 Jake 9982823323 10000
```
<img src="assets/addCustomer.png">

## Release 5
Buatlah fitur yang dapat menghapus `Customer` dari sebuah `Bank` berdasarkan id `Bank` dan ktp `Customer`, kemudian disimpan ke `data.json`
```
node index.js deleteCustomer <idBank> <ktp>
```
```
node index.js deleteCustomer 1 9982823323
```
<img src="assets/deleteCustomer.png">

## Release 6
Buatlah fitur yang dapat menampilkan seluruh `Customer` dari sebuah `Bank` berdasarkan id (gunakan `console.table` untuk mencetak table)
```
node index.js detail <idBank>
```
```
node index.js detail 1
```
<img src="assets/detail.png">

## Release 7
1. Buatlah fitur validasi apabila melakukan addCustomer dan jumlah `Customer` terdaftar pada `Bank` tersebut sudah mencapai limit
	```
	node index.js addCustomer 1 Jake 9982823323 10000
	```
	<img src="assets/validation-addCustomer.png">

2. Buatlah fitur validasi apabila melakukan deleteBank dengan id `Bank` yang tidak terdaftar
	```
	node index.js deleteBank 5
	```
	<img src="assets/validation-deleteBank.png">

3. Buatlah fitur validasi apabila melakukan deleteCustomer dengan ktp yang tidak terdaftar
	```
	node index.js deleteCustomer 1 00000000
	```
	<img src="assets/validation-deleteCustomer.png">