import express from 'express'
import { createSeller, deleteSeller, getSeller, getSellers, updateSeller } from '../Controller/sellerController.js';
const sellerRoute = express();

sellerRoute.post('/', createSeller);
sellerRoute.get('/', getSellers)
sellerRoute.get('/:id', getSeller)
sellerRoute.delete('/:id', deleteSeller)
sellerRoute.put('/:id', updateSeller)

export default sellerRoute;