import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import enablePublicAccess from '@cors';

const AvoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await enablePublicAccess(request, response);
    const db = new DB();
    const avoId = request.query.id as string;
    const avo = await db.getById(avoId);

    response.status(200).json(avo);
  } catch (e) {
    console.error(e);
    response.status(404).end();
  }
};

export default AvoDetail;
