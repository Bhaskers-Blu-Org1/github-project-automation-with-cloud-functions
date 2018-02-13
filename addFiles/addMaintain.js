var request = require('request');

function main(params) {
  if (params.action == "created" && params.sender.id == 34746072) {

    _url = "https://" + params.gitUsername + ":" + params.gitPersonalToken + "@api.github.com/repos/IBM/" + params.repository.name + "/contents/MAINTAINERS.md";
    
    options = {
      url: _url,
      method: "PUT",
      headers: {
        'User-agent': 'curl/7.54.0',
        'content-type': 'application/json',
        'Accept': 'application/vnd.github.inertia-preview+json'
      },
      body: JSON.stringify({message: "Add MAINTAINERS file", content: "IyBNYWludGFpbmVycyBHdWlkZQ0KDQpUaGlzIGd1aWRlIGlzIGludGVuZGVkIGZvciBtYWludGFpbmVycyAtIGFueWJvZHkgd2l0aCBjb21taXQgYWNjZXNzIHRvIG9uZSBvcg0KbW9yZSBDb2RlIFBhdHRlcm4gcmVwb3NpdG9yaWVzLg0KDQojIyBNZXRob2RvbG9neQ0KDQpUaGlzIHJlcG9zaXRvcnkgZG9lcyBub3QgaGF2ZSBhIHRyYWRpdGlvbmFsIHJlbGVhc2UgbWFuYWdlbWVudCBjeWNsZSwgYnV0DQpzaG91bGQgaW5zdGVhZCBiZSBtYWludGFpbmVkIGFzIGFzIGEgdXNlZnVsLCB3b3JraW5nLCBhbmQgcG9saXNoZWQgcmVmZXJlbmNlIGF0DQphbGwgdGltZXMuIFdoaWxlIGFsbCB3b3JrIGNhbiB0aGVyZWZvcmUgYmUgZm9jdXNlZCBvbiB0aGUgbWFzdGVyIGJyYW5jaCwgdGhlDQpxdWFsaXR5IG9mIHRoaXMgYnJhbmNoIHNob3VsZCBuZXZlciBiZSBjb21wcm9taXNlZC4NCg0KVGhlIHJlbWFpbmRlciBvZiB0aGlzIGRvY3VtZW50IGRldGFpbHMgaG93IHRvIG1lcmdlIHB1bGwgcmVxdWVzdHMgdG8gdGhlDQpyZXBvc2l0b3JpZXMuDQoNCiMjIE1lcmdlIGFwcHJvdmFsDQoNClRoZSBwcm9qZWN0IG1haW50YWluZXJzIHVzZSBMR1RNIChMb29rcyBHb29kIFRvIE1lKSBpbiBjb21tZW50cyBvbiB0aGUgcHVsbA0KcmVxdWVzdCB0byBpbmRpY2F0ZSBhY2NlcHRhbmNlIHByaW9yIHRvIG1lcmdpbmcuIEEgY2hhbmdlIHJlcXVpcmVzIExHVE1zIGZyb20NCnR3byBwcm9qZWN0IG1haW50YWluZXJzLiBJZiB0aGUgY29kZSBpcyB3cml0dGVuIGJ5IGEgbWFpbnRhaW5lciwgdGhlIGNoYW5nZQ0Kb25seSByZXF1aXJlcyBvbmUgYWRkaXRpb25hbCBMR1RNLg0KDQojIyBSZXZpZXdpbmcgUHVsbCBSZXF1ZXN0cw0KDQpXZSByZWNvbW1lbmQgcmV2aWV3aW5nIHB1bGwgcmVxdWVzdHMgZGlyZWN0bHkgd2l0aGluIEdpdEh1Yi4gVGhpcyBhbGxvd3MgYQ0KcHVibGljIGNvbW1lbnRhcnkgb24gY2hhbmdlcywgcHJvdmlkaW5nIHRyYW5zcGFyZW5jeSBmb3IgYWxsIHVzZXJzLiBXaGVuDQpwcm92aWRpbmcgZmVlZGJhY2sgYmUgY2l2aWwsIGNvdXJ0ZW91cywgYW5kIGtpbmQuIERpc2FncmVlbWVudCBpcyBmaW5lLCBzbyBsb25nDQphcyB0aGUgZGlzY291cnNlIGlzIGNhcnJpZWQgb3V0IHBvbGl0ZWx5LiBJZiB3ZSBzZWUgYSByZWNvcmQgb2YgdW5jaXZpbCBvcg0KYWJ1c2l2ZSBjb21tZW50cywgd2Ugd2lsbCByZXZva2UgeW91ciBjb21taXQgcHJpdmlsZWdlcyBhbmQgaW52aXRlIHlvdSB0byBsZWF2ZQ0KdGhlIHByb2plY3QuDQoNCkR1cmluZyB5b3VyIHJldmlldywgY29uc2lkZXIgdGhlIGZvbGxvd2luZyBwb2ludHM6DQoNCiMjIyBEb2VzIHRoZSBjaGFuZ2UgaGF2ZSBwb3NpdGl2ZSBpbXBhY3Q/DQoNClNvbWUgcHJvcG9zZWQgY2hhbmdlcyBtYXkgbm90IHJlcHJlc2VudCBhIHBvc2l0aXZlIGltcGFjdCB0byB0aGUgcHJvamVjdC4gQXNrDQp3aGV0aGVyIG9yIG5vdCB0aGUgY2hhbmdlIHdpbGwgbWFrZSB1bmRlcnN0YW5kaW5nIHRoZSBjb2RlIGVhc2llciwgb3IgaWYgaXQNCmNvdWxkIHNpbXBseSBiZSBhIHBlcnNvbmFsIHByZWZlcmVuY2Ugb24gdGhlIHBhcnQgb2YgdGhlIGF1dGhvciAoc2VlDQpbYmlrZXNoZWRkaW5nXShodHRwczovL2VuLndpa3Rpb25hcnkub3JnL3dpa2kvYmlrZXNoZWRkaW5nKSkuDQoNClB1bGwgcmVxdWVzdHMgdGhhdCBkbyBub3QgaGF2ZSBhIGNsZWFyIHBvc2l0aXZlIGltcGFjdCBzaG91bGQgYmUgY2xvc2VkIHdpdGhvdXQNCm1lcmdpbmcuDQoNCiMjIyBEbyB0aGUgY2hhbmdlcyBtYWtlIHNlbnNlPw0KDQpJZiB5b3UgZG8gbm90IHVuZGVyc3RhbmQgd2hhdCB0aGUgY2hhbmdlcyBhcmUgb3Igd2hhdCB0aGV5IGFjY29tcGxpc2gsIGFzayB0aGUNCmF1dGhvciBmb3IgY2xhcmlmaWNhdGlvbi4gQXNrIHRoZSBhdXRob3IgdG8gYWRkIGNvbW1lbnRzIGFuZC9vciBjbGFyaWZ5IHRlc3QNCmNhc2UgbmFtZXMgdG8gbWFrZSB0aGUgaW50ZW50aW9ucyBjbGVhci4NCg0KQXQgdGltZXMsIHN1Y2ggY2xhcmlmaWNhdGlvbiB3aWxsIHJldmVhbCB0aGF0IHRoZSBhdXRob3IgbWF5IG5vdCBiZSB1c2luZyB0aGUNCmNvZGUgY29ycmVjdGx5LCBvciBpcyB1bmF3YXJlIG9mIGZlYXR1cmVzIHRoYXQgYWNjb21tb2RhdGUgdGhlaXIgbmVlZHMuIElmIHlvdQ0KZmVlbCB0aGlzIGlzIHRoZSBjYXNlLCB3b3JrIHVwIGEgY29kZSBzYW1wbGUgdGhhdCB3b3VsZCBhZGRyZXNzIHRoZSBwdWxsDQpyZXF1ZXN0IGZvciB0aGVtLCBhbmQgZmVlbCBmcmVlIHRvIGNsb3NlIHRoZSBwdWxsIHJlcXVlc3Qgb25jZSB0aGV5IGNvbmZpcm0uDQoNCiMjIyBEb2VzIHRoZSBjaGFuZ2UgaW50cm9kdWNlIGEgbmV3IGZlYXR1cmU/DQoNCkZvciBhbnkgZ2l2ZW4gcHVsbCByZXF1ZXN0LCBhc2sgeW91cnNlbGYgImlzIHRoaXMgYSBuZXcgZmVhdHVyZT8iIElmIHNvLCBkb2VzDQp0aGUgcHVsbCByZXF1ZXN0IChvciBhc3NvY2lhdGVkIGlzc3VlKSBjb250YWluIG5hcnJhdGl2ZSBpbmRpY2F0aW5nIHRoZSBuZWVkDQpmb3IgdGhlIGZlYXR1cmU/IElmIG5vdCwgYXNrIHRoZW0gdG8gcHJvdmlkZSB0aGF0IGluZm9ybWF0aW9uLg0KDQpBcmUgbmV3IHVuaXQgdGVzdHMgaW4gcGxhY2UgdGhhdCB0ZXN0IGFsbCBuZXcgYmVoYXZpb3JzIGludHJvZHVjZWQ/IElmIG5vdCwgZG8NCm5vdCBtZXJnZSB0aGUgZmVhdHVyZSB1bnRpbCB0aGV5IGFyZSEgSXMgZG9jdW1lbnRhdGlvbiBpbiBwbGFjZSBmb3IgdGhlIG5ldw0KZmVhdHVyZT8gKFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBndWlkZWxpbmVzKS4gSWYgbm90IGRvIG5vdCBtZXJnZSB0aGUgZmVhdHVyZQ0KdW50aWwgaXQgaXMhIElzIHRoZSBmZWF0dXJlIG5lY2Vzc2FyeSBmb3IgZ2VuZXJhbCB1c2UgY2FzZXM/IFRyeSBhbmQga2VlcCB0aGUNCnNjb3BlIG9mIGFueSBnaXZlbiBjb21wb25lbnQgbmFycm93LiBJZiBhIHByb3Bvc2VkIGZlYXR1cmUgZG9lcyBub3QgZml0IHRoYXQNCnNjb3BlLCByZWNvbW1lbmQgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IG1haW50YWluIHRoZSBmZWF0dXJlIG9uIHRoZWlyIG93biwgYW5kDQpjbG9zZSB0aGUgcmVxdWVzdC4gWW91IG1heSBhbHNvIHJlY29tbWVuZCB0aGF0IHRoZXkgc2VlIGlmIHRoZSBmZWF0dXJlIGdhaW5zDQp0cmFjdGlvbiBhbW9uZyBvdGhlciB1c2VycywgYW5kIHN1Z2dlc3QgdGhleSByZS1zdWJtaXQgd2hlbiB0aGV5IGNhbiBzaG93IHN1Y2gNCnN1cHBvcnQu"})
    }      
     
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        request(options, function(error, response, body) {
          if (error) {
            reject(error);
          }
          else {
            resolve({msg: response});
          }
        });
      }, 8000);
    });
  }
}