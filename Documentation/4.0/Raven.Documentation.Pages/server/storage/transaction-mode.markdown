# Storage: Transaction Mode

Voron storage engine can work in one of the following transactions modes: _Safe_, _Lazy_ or _Danger_.

## Safe

By default, Voron uses _Safe_ mode. Transactions are written to journal files first (unbuffered I/O, write-through), and only afterwards copied to data file. The journals, functioning as the transactions log, are stored to preserve the durability property of ACID transactions. In the event of non graceful server shutdowns, the journals are the source of the recovery mechanism on the next database startup.

Each transaction is written to the journal once it's committed and it can be easily recovered if necessary. The user gets successful response _only_ if the commit finishes successfully.

## Lazy

_Lazy_ mode tells Voron to store transactions in temporary memory mapped journal files, what means the data is not written to the disk on the transaction commit. It happens only is when the 256 MB of the journal is filled (32 MB on 32 bit OS) and a new journal needs to be opened. The previous one is flushed into the data file.
By storing the journals directly into memory, we gain speed over a chance to lose few latest transactions.

## Danger

_Danger_ mode as it sounds is dangerous to use. It means data will be written to the disk with bypassing the machine and disk memory buffers. In the event of non graceful shutdown, the journal file might be corrupted. The data in the journal might enter inconsistent and non recoverable state.

The benefit is, therefore, speed over data integration in case of _Danger_ mode and speed with the price of possible transactions lose in _Lazy_ mode.

## Changing Transaction Mode

You can set the transaction mode for a database by using the following endpoint:

`{server-url}/databases/{database-name}/admin/transactions-mode&mode=< Safe | Lazy | Danger >`

If _Lazy_ or _Danger_ is set and not changed explicitly within 24 hours then RavenDB will automatically return to _Safe_ mode. You can control the duration of database working in non safe mode by using [`Storage.TransactionsModeDurationInMin`](../../server/configuration/storage-configuration#storage.transactionsmodedurationinmin) configuration option.


### Example

{CODE-BLOCK:bash}
curl -X GET http://127.0.0.1:8080/databases/myDB/admin/transactions-mode?mode=Safe
{CODE-BLOCK/}

## Related Articles

### Transactions

- [Transaction Support in RavenDB](../../client-api/faq/transaction-support)

### Storage

- [Storage Engine](../../server/storage/storage-engine)
- [Directory Structure](../../server/storage/directory-structure)
