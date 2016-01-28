/**
 * @author Sallar Kaboli <sallar.kaboli@gmail.com>
 * @date 13.01.2016
 */
import logger from "./helpers/logger";
import {
    findVenues,
    downloadMenus,
    saveMenus
} from "./controllers/venues";

try {
    findVenues()
        .then(downloadMenus)
        .then(saveMenus)
        .then(function(r) {
            logger.info(r);
        });
} catch (err) {
    logger.error(err);
}
