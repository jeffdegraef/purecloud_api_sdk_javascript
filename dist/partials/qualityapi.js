/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
var QualityApi = function (pureCloudSession) {
	/**
     * Gets a list of Agent Activities
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - Start time of agent activity
	* @param {string} endTime - End time of agent activity
	* @param {array} agentUserId - user id of agent requested
	* @param {string} evaluatorUserId - user id of the evaluator
	* @param {string} name - name
	*/
	function getAgentsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, agentUserId, evaluatorUserId, name){
		var apipath = '/api/v1/quality/agents/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAgentsActivity = getAgentsActivity;
	/**
     * Get the list of calibrations
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} conversationId - conversation id
	* @param {string} startTime - Beginning of the calibration query
	* @param {string} endTime - end of the calibration query
	* @param {string} calibratorId - user id of calibrator
	*/
	function getCalibrations(pageSize, pageNumber, sortBy, expand, conversationId, startTime, endTime, calibratorId){
		var apipath = '/api/v1/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibrations = getCalibrations;
	/**
     * Create a calibration
	 * @memberOf QualityApi#
	* @param {} body - calibration
	* @param {string} expand - calibratorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "calibrator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "id": "",
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "isScoringIndex": true,
      "selfUri": ""
   },
   "expertEvaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function createCalibrations(body, expand){
		var apipath = '/api/v1/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCalibrations = createCalibrations;
	/**
     * Get a calibration by id.
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function getCalibrationsCalibration(calibrationId, calibratorId){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibrationsCalibration = getCalibrationsCalibration;
	/**
     * Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {} body - Calibration
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "calibrator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "id": "",
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "isScoringIndex": true,
      "selfUri": ""
   },
   "expertEvaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateCalibrationsCalibration(calibrationId, body){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCalibrationsCalibration = updateCalibrationsCalibration;
	/**
     * Delete a calibration by id.
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function deleteCalibrationsCalibration(calibrationId, calibratorId){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCalibrationsCalibration = deleteCalibrationsCalibration;
	/**
     * Get audits for conversation or recording
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} recordingId - id of the recording
	* @param {string} entityType - entity type options: Recording, Calibration, Evaluation, Annotation
	*/
	function getConversationsConversationAudits(conversationId, pageSize, pageNumber, sortBy, expand, recordingId, entityType){
		var apipath = '/api/v1/quality/conversations/{conversationId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(recordingId !== undefined && recordingId !== null){
			queryParameters.recordingId = recordingId;
		}


		if(entityType !== undefined && entityType !== null){
			queryParameters.entityType = entityType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationAudits = getConversationsConversationAudits;
	/**
     * Create an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "evaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "calibration": {
      "id": "",
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {},
      "selfUri": ""
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0,
      "selfUri": ""
   },
   "isScoringIndex": true,
   "selfUri": ""
}
	*/
	function createConversationsConversationEvaluations(conversationId, body, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationsConversationEvaluations = createConversationsConversationEvaluations;
	/**
     * Get an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - agent, evaluator, evaluationForm
	*/
	function getConversationsConversationEvaluationsByEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationEvaluationsByEvaluationId = getConversationsConversationEvaluationsByEvaluationId;
	/**
     * Update an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "evaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "calibration": {
      "id": "",
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {},
      "selfUri": ""
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0,
      "selfUri": ""
   },
   "isScoringIndex": true,
   "selfUri": ""
}
	*/
	function updateConversationsConversationEvaluationsByEvaluationId(conversationId, evaluationId, body, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationsConversationEvaluationsByEvaluationId = updateConversationsConversationEvaluationsByEvaluationId;
	/**
     * Delete an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - evaluatorId
	*/
	function deleteConversationsConversationEvaluationsByEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationsConversationEvaluationsByEvaluationId = deleteConversationsConversationEvaluationsByEvaluationId;
	/**
     * Queries Evaluations and returns a paged list
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} conversationId - conversationId specified
	* @param {string} agentUserId - user id of the agent
	* @param {string} evaluatorUserId - evaluator user id
	* @param {string} queueId - queue id
	* @param {string} startTime - start time of the evaluation query
	* @param {string} endTime - end time of the evaluation query
	* @param {array} evaluationState - evaluation state options: Pending, InProgress, Finished
	* @param {boolean} isReleased - the evaluation has been released
	* @param {boolean} agentHasRead - agent has the evaluation
	* @param {boolean} expandAnswerTotalScores - get the total scores for evaluations
	* @param {integer} maximum - maximum
	*/
	function getEvaluationsQuery(pageSize, pageNumber, sortBy, expand, conversationId, agentUserId, evaluatorUserId, queueId, startTime, endTime, evaluationState, isReleased, agentHasRead, expandAnswerTotalScores, maximum){
		var apipath = '/api/v1/quality/evaluations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(queueId !== undefined && queueId !== null){
			queryParameters.queueId = queueId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(evaluationState !== undefined && evaluationState !== null){
			queryParameters.evaluationState = evaluationState;
		}


		if(isReleased !== undefined && isReleased !== null){
			queryParameters.isReleased = isReleased;
		}


		if(agentHasRead !== undefined && agentHasRead !== null){
			queryParameters.agentHasRead = agentHasRead;
		}


		if(expandAnswerTotalScores !== undefined && expandAnswerTotalScores !== null){
			queryParameters.expandAnswerTotalScores = expandAnswerTotalScores;
		}


		if(maximum !== undefined && maximum !== null){
			queryParameters.maximum = maximum;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluationsQuery = getEvaluationsQuery;
	/**
     * Query evaluations
	 * @memberOf QualityApi#
	* @param {} body - query
	* @param {string} expand - evaluator,agent
	 * @example
	 * Body Example:
	 * {
   "conversationId": "",
   "userType": "",
   "currentUserId": "",
   "agentId": "",
   "queueId": "",
   "interval": "",
   "evaluationState": [],
   "isReleased": true,
   "agentHasRead": true,
   "expandAnswerTotalScores": true,
   "maximum": 0
}
	*/
	function createEvaluationsQuery(body, expand){
		var apipath = '/api/v1/quality/evaluations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEvaluationsQuery = createEvaluationsQuery;
	/**
     * Score evaluation
	 * @memberOf QualityApi#
	* @param {} body - evaluationAndScoringSet
	 * @example
	 * Body Example:
	 * {
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   }
}
	*/
	function createEvaluationsScoring(body){
		var apipath = '/api/v1/quality/evaluations/scoring';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEvaluationsScoring = createEvaluationsScoring;
	/**
     * Get an evaluator activity
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - The start time specified
	* @param {string} endTime - The end time specified
	* @param {string} name - Evaluator name
	* @param {array} permission - permission strings
	*/
	function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, name, permission){
		var apipath = '/api/v1/quality/evaluators/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluatorsActivity = getEvaluatorsActivity;
	/**
     * Get the list of evaluation forms
	 * @memberOf QualityApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	*/
	function getForms(pageSize, pageNumber, expand, name){
		var apipath = '/api/v1/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getForms = getForms;
	/**
     * Create an evaluation form.
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function createForms(body){
		var apipath = '/api/v1/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createForms = createForms;
	/**
     * Get an evaluation form
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getFormsForm(formId){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFormsForm = getFormsForm;
	/**
     * Update an evaluation form.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function updateFormsForm(formId, body){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateFormsForm = updateFormsForm;
	/**
     * Delete an evaluation form.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function deleteFormsForm(formId){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFormsForm = deleteFormsForm;
	/**
     * Gets all the revisions for a specific evaluation.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getFormsFormVersions(formId, pageSize, pageNumber){
		var apipath = '/api/v1/quality/forms/{formId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFormsFormVersions = getFormsFormVersions;
	/**
     * Get the published evaluation forms.
	 * @memberOf QualityApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function getPublishedforms(pageSize, pageNumber, name){
		var apipath = '/api/v1/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedforms = getPublishedforms;
	/**
     * Publish an evaluation form.
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function createPublishedforms(body){
		var apipath = '/api/v1/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPublishedforms = createPublishedforms;
	/**
     * Get the published evaluation forms.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getPublishedformsForm(formId){
		var apipath = '/api/v1/quality/publishedforms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedformsForm = getPublishedformsForm;

    return self;
};